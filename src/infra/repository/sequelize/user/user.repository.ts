import IUserRepository from '@entities/user/repository/user.repository.interface';
import User from '@entities/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import {
  RepositoryOptions,
  RepositoryCount,
} from 'src/domain/@shared/repository/repository.interface';
import { UserModel } from 'src/infra/db/models/user.model';
import UserFactory from '@entities/user/factory/user.factory';
import { IHasher } from 'src/domain/@shared/interface/hasher.interface';

export default class UserRepository implements IUserRepository {
  constructor(private hasher: IHasher) {}
  save(entity: User, transaction: any): Promise<User> {
    throw new Error('Method not implemented');
  }
  count(data: RepositoryOptions, transaction?: any): Promise<RepositoryCount> {
    throw new Error('Method not implemented');
  }
  async create(entity: User): Promise<User> {
    const hashedPassword = await this.hasher.hash(entity.password);
    const data = await UserModel.create({
      internal_id: uuidv4(),
      name: entity.name,
      email: entity.email,
      password: hashedPassword,
    });
    return UserFactory.createFromSequelizeModel(data);
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
  async getByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });
    if (!user) return undefined;
    return UserFactory.createFromSequelizeModel(user);
  }
}
