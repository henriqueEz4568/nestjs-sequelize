import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';

@Controller('users')
export class UserController {
  //constructor(private readonly appService: AppService) {}
  '';
  @Get()
  async getHello(): Promise<UserModel[]> {
    const users = await UserModel.findAll({});
    return users;
  }
  @Post()
  async createUser(
    @Body() body: any,
  ): Promise<UserModel | { message: string }> {
    try {
      const newUser = await UserModel.create({
        name: body.name,
        email: body.email,
        password: body.password,
        internal_id: uuidv4(),
      });
      return newUser;
    } catch (e: any) {
      return {
        message: e.message,
      };
    }
  }
}
