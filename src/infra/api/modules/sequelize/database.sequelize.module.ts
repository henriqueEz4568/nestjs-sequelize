import { Module } from '@nestjs/common';
import { sequelizeProvider } from '../../providers/sequelize/sequelize.provider';
import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import UserRepository from 'src/infra/db/sequelize/repository/sequelize/user/user.repository';

@Module({
  providers: [
    ...sequelizeProvider,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [...sequelizeProvider, IUserRepository],
})
export class DatabaseModule {}
