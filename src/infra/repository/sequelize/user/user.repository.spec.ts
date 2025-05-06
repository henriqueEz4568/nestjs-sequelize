/* eslint-disable @typescript-eslint/no-unused-vars */
import User from '@entities/user/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/infra/db/models/user.model';
import UserRepository from './user.repository';
const repository = new UserRepository()
describe('user repository integrated test', () => {
  let sequelize: Sequelize;
  beforeAll(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: true,
      sync: {
        force: true,
      },
    });

    await sequelize.addModels([UserModel]);
    await sequelize.sync({
      force: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  afterAll(async () => {
    await sequelize.close();
  });
  it('should be able to create', async () => {
       const userData = new User({
          name: 'john doe',
          email: 'johndoe@gmail.com',
          password: 'jhonpassword',
        });
        const user = await repository.create(userData)
        expect(user.name).toBe('john doe')
        expect(user.dbId).toBeDefined()
        expect(user.email).toBe('johndoe@gmail.com')
        expect(user.id).toBeDefined()
  });
});
