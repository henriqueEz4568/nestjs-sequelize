import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticateController } from '../../controllers/auth.controller';
import { DatabaseModule } from '../sequelize/database.sequelize.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from '../../controllers/user.controller';
import { AuthModule } from '../auth/auth.module';
import { UserCreateUseCase } from 'src/domain/usecases/user/user-create.usecase';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { FilesController } from '../../controllers/upload.controller';


@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  exports: [DatabaseModule],
  controllers: [AuthenticateController, UserController, FilesController],
  providers: [UserCreateUseCase],
})
export class HttpModule {}
