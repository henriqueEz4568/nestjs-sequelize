import { RepositoryClass } from '@domain/@shared/repository/repository.interface';
import File from '@entities/file/file.entity';

export abstract class IFileRepository extends RepositoryClass<File> {
  abstract create(entity: File): Promise<File>;
  abstract getAll(): Promise<File[]>;
}
