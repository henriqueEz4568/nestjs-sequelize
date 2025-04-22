import { forwardRef, Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '../sequelize/sequelize.module';
import { UserController } from '../../controllers/user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    SequelizeModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}