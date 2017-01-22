/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {UserRestService} from './user-rest.service';
import {Http, XHRBackend, BaseRequestOptions} from "@angular/http";
import {User} from "../model/user";

describe('UserRestService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRestService,
        {
          provide: Http,
          deps: [XHRBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
    TestBed.compileComponents();
  }));


  it('should ...', inject([UserRestService], (service: UserRestService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUsers()', () => {

    it('should return all users', inject([UserRestService], (service: UserRestService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: true});
      let user2 = new User({id: 100001, name: 'User2', email: 'user2@yandex.ru', enabled: true});
      let admin = new User({id: 100001, name: 'Admin', email: 'admin@gmail.com', enabled: true});
      let station = new User({id: 100001, name: 'User2', email: 'station@gamblingstation.com', enabled: true});
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#getUserById(id)', () => {

    it('should get user with the corresponding id', inject([UserRestService], (service: UserRestService) => {
      let user1 = new User({id: 100000, name: 'User1', email: 'user1@yandex.ru', enabled: false});
      expect(service.getUserById(100000)).toEqual([user1]);
    }));

  });

});
