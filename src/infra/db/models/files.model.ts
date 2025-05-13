import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from './user.model';

@Table({
  tableName: 'files',
  timestamps: true,
  paranoid: true,
  createdAt: 'created',
  updatedAt: 'modified',
  deletedAt: 'removed',
})
export class FilesModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  url!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  directory!: string;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;
  
  @BelongsTo(() => UserModel)
  user!: UserModel;
  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created!: Date;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  modified!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
  })
  removed!: Date | null;
}
