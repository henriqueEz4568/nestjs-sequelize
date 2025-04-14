import IUserRepository from '@entities/user/repository/user.repository.interface';
import User from '@entities/user/user.entity';
import {
  RepositoryOptions,
  RepositoryCount,
} from 'src/domain/@shared/repository/repository.interface';

export default class UserRepository implements IUserRepository {
  count(data: RepositoryOptions, transaction?: any): Promise<RepositoryCount> {
    throw new Error('Method not implemented');
  }
  create(entity: User): Promise<User> {
    throw new Error('Method not implemented');
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
