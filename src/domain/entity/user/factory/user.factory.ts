import { UserModel } from 'src/infra/db/models/user.model';
import User from '../user.entity';

export default class UserFactory {
  static createFromSequelizeModel(data: UserModel): User {
    return new User({
      dbId: data.id,
      email: data.email,
      name: data.name,
      id: data.internal_id,
      password: data.password,
      created: data.created,
      modified: data.modified,
      removed: data.removed,
    });
  }
}
