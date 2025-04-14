import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';
import UserRepository from 'src/infra/repository/sequelize/user/user.repository';
import UserCreateUseCase from 'src/domain/usecases/user/user-create.usecase';
import { UserOutputDTO } from '@entities/user/user.entity';

@Controller('users')
export class UserController {
  //constructor(private readonly appService: AppService) {}
  ;
  @Get()
  async getHello(): Promise<UserModel[]> {
    const users = await UserModel.findAll({});
    return users;
  }
  @Post()
  async createUser(
    @Body() body: any,
  ): Promise<UserOutputDTO | { success: boolean; message: string }> {
    try {
      const repository = new UserRepository();
      const usecase = new UserCreateUseCase(repository);
      return await usecase.execute(body);
    } catch (e: any) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
