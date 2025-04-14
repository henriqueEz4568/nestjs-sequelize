import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';
import UserRepository from 'src/infra/repository/sequelize/user/user.repository';
import UserCreateUseCase from 'src/domain/usecases/user/user-create.usecase';
import { UserOutputDTO } from '@entities/user/user.entity';
@Controller('users')
export class UserController {
  //constructor(private readonly appService: AppService) {}
  @Get()
  async getHello(): Promise<UserModel[]> {
    const users = await UserModel.findAll({});
    return users;
  }
  @Get('hello')
  getHelloWorld(): any {
    return {
      message: 'Hello World',
    };
  }
  @Post('login')
  async login(@Body() body: any): Promise<any> {
    const repository = new UserRepository();
    const user = await repository.getByEmail(body.email)
    if(user.password === body.password){
      return 'Found'
    }
    else{
      return 'Not found'
    }
  }
  @Post()
  async createUser(
    @Body() body: any,
  ): Promise<UserOutputDTO | { success: boolean; message: string }> {
    const repository = new UserRepository();
    try {
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
