import File from '@entities/file/file.entity';
import { IRepository } from 'src/domain/@shared/repository/repository.interface';

export abstract class IFileRepository extends IRepository<File> {
  abstract create(entity: File): Promise<File>;
  abstract getAll(): Promise<File[]>;
}
