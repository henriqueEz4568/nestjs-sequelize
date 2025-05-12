import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';
import UserRepository from 'src/infra/repository/sequelize/user/user.repository';
import UserCreateUseCase from 'src/domain/usecases/user/user-create.usecase';
import { UserOutputDTO } from '@entities/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { BcryptHasher } from 'src/infra/factory/encrypt/bcrypt/bcrypt-encrypt-engine';
import { JwtAuthGuard } from '../modules/auth/jwt-auth.guard';
import { IUserRepository } from '@entities/user/repository/user.repository.interface';
const hasher = new BcryptHasher();
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private jwt: JwtService,
    private repository: IUserRepository,
  ) {}
  @Get()
  async getHello(): Promise<UserModel[]> {
    const users = await UserModel.findAll({});
    return users;
  }
  @Get('token')
  async handle() {
    const token = await this.jwt.sign({ sub: 'user-id' });
    return {
      token,
    };
  }
  @Post()
  async createUser(
    @Body() body: any,
  ): Promise<UserOutputDTO | { success: boolean; message: string }> {
    try {
      const usecase = new UserCreateUseCase(this.repository);
      return await usecase.execute(body);
    } catch (e: any) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
