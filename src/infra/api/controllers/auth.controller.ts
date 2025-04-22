import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';
import UserRepository from 'src/infra/repository/sequelize/user/user.repository';
import UserCreateUseCase from 'src/domain/usecases/user/user-create.usecase';
import { UserOutputDTO } from '@entities/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { BcryptHasher } from 'src/infra/factory/encrypt/bcrypt/bcrypt-encrypt-engine';
const hasher = new BcryptHasher();
@Controller('auth')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}
  @Get()
  async listAll(): Promise<UserModel[]> {
    const users = await UserModel.findAll({});
    return users;
  }
  @Post('login')
  async login(@Body() body: any): Promise<any> {
    const repository = new UserRepository(hasher);
    const user = await repository.getByEmail(body.email);
      return {
        user: {
          ...user.toJson(),
          token: await this.jwt.sign({
            internal_id: user.id,
          }),
        },
      };
    
  }
  @Get('token')
  async handle() {
    const token = await this.jwt.sign({ sub: 'user-id' });
    return {
      token,
    };
  }
}
