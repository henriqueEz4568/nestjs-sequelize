import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/infra/db/models/user.model';
import { JwtService } from '@nestjs/jwt';
import { BcryptHasher } from 'src/infra/factory/encrypt/bcrypt/bcrypt-encrypt-engine';
import { compare, hash } from 'bcryptjs';
import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import { Public } from '../modules/auth/public';
@Controller('auth')
@Public()
export class AuthenticateController {
  constructor(
    private jwt: JwtService,
    private repository: IUserRepository,
  ) {}
  @Post('login')
  async login(@Body() body: any): Promise<any> {
    const user = await this.repository.getByEmail(body.email);
    if (!user) {
      return {
        success: false,
        message: 'no account founded with this email',
      };
    }
    //const isPasswordValid = await compare(body.password, user.password);
    //
    //if (!isPasswordValid) {
    //  throw new UnauthorizedException('Senha inválida');
    //}
    const token = await this.jwt.sign(
      { internal_id: user.id },
      {
        expiresIn: '1h',
        //expiresIn: 3,
      },
    );
    return {
      user: {
        ...user.toJson(),
        token,
      },
    };
  }
}
