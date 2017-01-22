import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http'
import {User} from "../model/user";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class UserRestService {

  //private user: User;
  //private users: Array<User>;
  private heroku_url = 'http://gamblingstation.herokuapp.com/rest/admin/users';

  constructor(private http: Http) {}

  static createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('YWRtaW5AZ21haWwuY29tOmFkbWlu'));
  }

  getAllUsers(): Observable<any> {
    let headers = new Headers();
    UserRestService.createAuthorizationHeader(headers);

    return this.http.get(this.heroku_url, {
      headers: headers
    //}).map(res => res.json().subscribe(users => this.users = users));
    }).map(res => res.json());
  }

  getUserById(userId: number): Observable<any> {
    let headers = new Headers();
    UserRestService.createAuthorizationHeader(headers);

    return this.http.get(this.heroku_url +`/${userId}`, {
      headers: headers
    //}).map(res => res.json().subscribe(user => this.user = user));
    }).map(res => res.json());

  }
}
