import { Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/infra/db/models/user.model';

export const sequelizeProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([UserModel]);

      try {
        await sequelize.sync();
        console.log('Conexão com o banco de dados bem-sucedida!');
        return sequelize;
      } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
      }
    },
  },
];
