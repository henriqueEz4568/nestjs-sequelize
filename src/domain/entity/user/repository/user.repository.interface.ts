import IRepositoryInterface from 'src/domain/@shared/repository/repository.interface';
import User from '@entities/user/user.entity';

export abstract class IUserRepository {
  abstract create(entity: User): Promise<User>;
  abstract getByEmail(email: string): Promise<User | undefined>;
}
