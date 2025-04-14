import IUserRepository from '@entities/user/repository/user.repository.interface';
import User from '@entities/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import {
  RepositoryOptions,
  RepositoryCount,
} from 'src/domain/@shared/repository/repository.interface';
import { UserModel } from 'src/infra/db/models/user.model';

export default class UserRepository implements IUserRepository {
  count(data: RepositoryOptions, transaction?: any): Promise<RepositoryCount> {
    throw new Error('Method not implemented');
  }
  async create(entity: User): Promise<User> {
    const data = await UserModel.create({
      internal_id: uuidv4(),
      name: entity.name,
      email: entity.email,
      password: entity.password,
    });
    return new User({
      dbId: data.id,
      id: data.internal_id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }
  delete(dbId: number): Promise<boolean> {
    throw new Error('Method not implemented');
  }
  getAll(data?: RepositoryOptions, transaction?: any): Promise<User[]> {
    throw new Error('Method not implemented');
  }
  getByDbId(dbId: number, transaction?: any): Promise<User> {
    throw new Error('Method not implemented');
  }
  getOne(data: RepositoryOptions, transaction?: any): Promise<User> {
    throw new Error('Method not implemented');
  }
}
