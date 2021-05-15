import { UserService } from './../service/user.service';
import { User } from './../../listing/model/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  user$: Observable<User[]>;


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user$ = this.userService.getListings();

  }

}
