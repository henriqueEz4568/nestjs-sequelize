import User from './user.entity';

describe('user unit tests', () => {
  it('should create a user', () => {
    const user = new User({
      name: 'john doe',
      email: 'johndoe@gmail.com',
      password: 'jhonpassword',
      //created: new Date(),
    });

    expect(user.name).toBe('john doe');
    expect(user.email).toBe('johndoe@gmail.com');
    expect(user.password).toBe('jhonpassword');
    expect(user.id).toBeDefined();
    expect(user.created).toBeDefined();
    console.log('1234')
  });
});
