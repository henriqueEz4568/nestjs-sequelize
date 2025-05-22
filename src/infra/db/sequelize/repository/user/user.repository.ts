import User from '@entities/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import {
  RepositoryOptions,
  RepositoryCount,
} from 'src/domain/@shared/repository/repository.interface';
import { UserModel } from 'src/infra/db/models/user.model';
import UserFactory from '@entities/user/factory/user.factory';
import { IHasher } from 'src/domain/@shared/interface/hasher.interface';
import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import { SequelizeUserMapper } from '../../mappers/user.mapper';

export default class UserRepository implements IUserRepository {
  save(entity: User, transaction: any): Promise<User> {
    throw new Error('Method not implemented');
  }
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
    return UserFactory.createFromSequelizeModel(data);
  }
  delete(dbId: number): Promise<boolean> {
    throw new Error('Method not implemented');
  }
  async getAll(data?: RepositoryOptions, transaction?: any): Promise<User[]> {
    const users = await UserModel.findAll({});
    return users.map((i) => SequelizeUserMapper.toDomain(i));
  }
  getByDbId(dbId: number, transaction?: any): Promise<User> {
    throw new Error('Method not implemented');
  }
  async getById(id: string): Promise<User> {
    const data = await UserModel.findOne({
      where: {
        internal_id: id,
      },
    });
    return SequelizeUserMapper.toDomain(data);
  }
  getOne(data: RepositoryOptions, transaction?: any): Promise<User> {
    throw new Error('Method not implemented');
  }
  async getByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });
    if (!user) return undefined;
    return SequelizeUserMapper.toDomain(user);
  }
}
