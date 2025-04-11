import User from './user.entity';

describe('customer unit tests', () => {
  it('', () => {
    const user = new User({
      name: 'john doe',
    });
    expect(user.name).toBe('john doe');
  });
});
