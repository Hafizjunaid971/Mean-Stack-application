import { User } from './../../listing/model/user';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class UserService {
  private ROOT_URL = "http://localhost:4000/api/user";

  constructor(private http: HttpClient, private router: Router) { }


  getListings(): Observable<User[]> {
    return this.http.get<User[]>(this.ROOT_URL);
  }

  getListing(id: string) {
    return this.http.get<User>(`${this.ROOT_URL}/${id}`);
  }







  register(user: any) {
    return this.http.post<any>(`${this.ROOT_URL}/register`, user);
  }

  login(user: any) {
    return this.http.post<any>(`${this.ROOT_URL}/login`, user);
  }
  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["/listings"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

}
