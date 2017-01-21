import { Injectable } from '@angular/core';
import {User} from "../model/user";

@Injectable()
export class UserDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for user`s
  users: User[] = [];

  constructor() {
  }

  // Simulate POST /users
  addUser(user: User): UserDataService {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.users.push(user);
    return this;
  }

  // Simulate DELETE /users/:id
  deleteUserById(id: number): UserDataService {
    this.users = this.users
      .filter(user => user.id !== id);
    return this;
  }

  // Simulate PUT /users/:id
  updateUserById(id: number, values: Object = {}): User {
    let user = this.getUserById(id);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // Simulate GET /users
  getAllUsers(): User[] {
    return this.users;
  }

  // Simulate GET /users/:id
  getUserById(id: number): User {
    return this.users
      .filter(user => user.id === id)
      .pop();
  }

  // Toggle user enabled
  toggleUserEnabled(user: User){
    return this.updateUserById(user.id, {
      enabled: !user.enabled
    });
  }

}
