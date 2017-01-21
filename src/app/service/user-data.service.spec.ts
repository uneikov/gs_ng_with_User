/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
import {User} from "../model/user";

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should ...', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([UserDataService], (service: UserDataService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      let user2 = new User({id: 100001, name: 'User2', email: 'user2@yandex.ru', enabled: false});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#save(user)', () => {

    it('should automatically assign an incrementing id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({name: 'User1', email: 'user1@yandex.ru', enabled: false});
      let user2 = new User({name: 'User2', email: 'user2@yandex.ru', enabled: false});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });

  describe('#deleteUserById(id)', () => {

    it('should remove user with the corresponding id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      let user2 = new User({id: 100001, name: 'User2', email: 'user2@yandex.ru', enabled: false});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(100000);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUserById(100001);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      let user2 = new User({id: 100001, name: 'User2', email: 'user2@yandex.ru', enabled: false});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(1);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#updateUserById(id, values)', () => {

    it('should return user with the corresponding id and updated data', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      service.addUser(user1);
      let updatedUser = service.updateUserById(100000, {
        name: 'new Name'
      });
      expect(updatedUser.name).toEqual('new Name');
    }));

    it('should return null if user is not found', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      service.addUser(user1);
      let updatedUser = service.updateUserById(1, {
        name: 'new Name'
      });
      expect(updatedUser).toEqual(null);
    }));

  });

  describe('#toggleUserEnabled(user)', () => {

    it('should return the updated user with inverse enabled status', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      service.addUser(user1);
      let updatedUser = service.toggleUserEnabled(user1);
      expect(updatedUser.enabled).toEqual(true);
      updatedUser = service.toggleUserEnabled(user1);
      expect(updatedUser.enabled).toEqual(false);
    }));

  });

});
