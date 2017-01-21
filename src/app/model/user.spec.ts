import {User} from './user';

describe('User', () => {

  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      id: 100002,
      name: 'Admin',
      email: 'admin@gmail.com',
      enabled: true
    });
    expect(user.id).toEqual(100002);
    expect(user.name).toEqual('Admin');
    expect(user.email).toEqual('admin@gmail.com');
    expect(user.enabled).toEqual(true);
  });

});
