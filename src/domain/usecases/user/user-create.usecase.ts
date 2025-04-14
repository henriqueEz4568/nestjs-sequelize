import IUserRepository from '@entities/user/repository/user.repository.interface';
import User, { UserOutputDTO } from '@entities/user/user.entity';

export default class UserCreateUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(data: any): Promise<UserOutputDTO> {
    const emailExists = this.repository.getByEmail(data.email);
    if (emailExists) {
      throw new Error('An user with this email already exists');
    }
    const userData = new User({
      email: data.email,
      name: data.name,
      password: data.password,
    });
    const user = await this.repository.create(userData);
    return user.toJson();
  }
}
