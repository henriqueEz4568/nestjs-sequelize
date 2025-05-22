import File from '@entities/file/file.entity';
import { FilesModel } from '../../models/files.model';

export class SequelizeFileMapper {
  static toDomain(options: FilesModel) {
    return new File({
      dbId: options.id,
      internalDirectory: options.directory,
      created: options.createdAt,
      modified: options.updatedAt,
      removed: options.removed,
    });
  }
}
