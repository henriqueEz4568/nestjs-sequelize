import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import User, { UserOutputDTO } from '@entities/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { BcryptHasher } from 'src/infra/factory/encrypt/bcrypt/bcrypt-encrypt-engine';
import { JwtAuthGuard } from '../modules/auth/jwt-auth.guard';
import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import { UserCreateUseCase } from 'src/domain/usecases/user/user-create.usecase';
const hasher = new BcryptHasher();
@Controller('users')
export class UserController {
  constructor(
    private jwt: JwtService,
    private repository: IUserRepository,
    private usecase: UserCreateUseCase,
  ) {}
  @Get()
  async getHello(): Promise<User[]> {
    const users = await this.repository.getAll();
    return users;
  }
  @Post()
  async createUser(
    @Body() body: any,
  ): Promise<UserOutputDTO | { success: boolean; message: string }> {
    try {
      return await this.usecase.execute(body);
    } catch (e: any) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
