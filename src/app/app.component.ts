import { Component } from '@angular/core';
import {UserDataService} from "./service/user-data.service";
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})

export class AppComponent {
  title = 'app works!';

  /*private userDataService: UserDataService;

  constructor(userDataService: UserDataService) {
    //this.userDataService = userDataService;
  }*/

  constructor(private userDataService: UserDataService) {
  }

  newUser = new User();

  addUser() {
    this.userDataService.addUser(this.newUser);
    this.newUser = new User();
  }

  toggleUserEnabled(user) {
    this.userDataService.toggleUserEnabled(user);
  }

  removeUser(user) {
    this.userDataService.deleteUserById(user.id);
  }

  get users() {
    return this.userDataService.getAllUsers();
  }

}
