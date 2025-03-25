import { Module } from '@nestjs/common';
import { sequelizeProvider } from '../../providers/sequelize/sequelize.provider';

@Module({
  providers: [...sequelizeProvider],
  exports: [...sequelizeProvider],
})
export class SequelizeModule {}
