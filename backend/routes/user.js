  
const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  // checking user email id in database
  const emailExit = await User.findOne({
    email: req.body.email
  });

  if (emailExit) return res.status(400).send("Email already exists");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get user

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

// Single listing
router.get("/:userId", async (req, res) => {
  try {
    const users = await User.findById(req.params.userId);
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});


// user login
router.post("/login", async (req, res) => {
  // checking user email id in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong");

  // checking password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

// res.send("log in");
  //   // creat and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

module.exports = router;