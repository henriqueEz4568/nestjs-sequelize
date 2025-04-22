import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from './sequelize/sequelize.module';
import { UserController } from '../controllers/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
