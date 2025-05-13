import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { FilesModel } from './files.model';

@Table({
  tableName: 'users',
  timestamps: false,
  paranoid: true,
  createdAt: 'created',
  updatedAt: 'modified',
  deletedAt: 'removed',
})
export class UserModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare id: number;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  declare internal_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare created: Date;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare modified: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
  })
  declare removed: Date | null;

  @HasMany(() => FilesModel, 'user_id')
  declare files?: FilesModel[];
}
