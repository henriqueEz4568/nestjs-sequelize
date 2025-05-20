import User from '@entities/user/user.entity';
import { UserModel } from '../../models/user.model';

export class SequelizeUserMapper {
  static toDomain(options: UserModel) {
    const { email, name, password, created, removed, modified } = options;
    return new User({
      dbId: options.id,
      id: options.internal_id,
      email,
      name,
      password,
      created,
      modified,
      removed,
    });
  }
}
