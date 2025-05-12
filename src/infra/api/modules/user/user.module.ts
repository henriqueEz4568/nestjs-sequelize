import { forwardRef, Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { UserController } from '../../controllers/user.controller';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../sequelize/database.sequelize.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
