import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import User, { UserOutputDTO } from '@entities/user/user.entity';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
@Injectable()
export class UserCreateUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(data: {
    password: string;
    email: string;
    name: string;
  }): Promise<UserOutputDTO> {
    const emailExists = await this.repository.getByEmail(data.email);
    if (emailExists) {
      throw new Error('An user with this email already exists');
    }
    const hashedPassword = await hash(data.password, 8);
    const userData = new User({
      email: data.email,
      name: data.name,
      password: hashedPassword,
    });
    const user = await this.repository.create(userData);
    return user.toJson();
  }
}
