import IRepositoryInterface from 'src/domain/@shared/repository/repository.interface';
import User from '@entities/user/user.entity';

export default interface IUserRepository extends IRepositoryInterface<User> {
  create(entity: User): Promise<User>;
  getByEmail(email: string): Promise<User | undefined>;
}
