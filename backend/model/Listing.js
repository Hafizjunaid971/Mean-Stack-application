const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  _id:0,
  title: String,
  price: String,
  locality: String,
  details: String
});

module.exports = mongoose.model("Listing", listingSchema);