import User, { UserOutputDTO } from '@entities/user/user.entity';
import Entity from '../../@shared/entity/entity';

export type FileOutputDTO = {
  id?: string;
  dbId?: number;
  url: string;
  internalDirectory: string;
  created?: Date;
  modified?: Date;
  removed?: Date;
  user?: UserOutputDTO;
};

export type FileInputDTO = {
  id?: string;
  dbId?: number;
  url: string;
  internalDirectory: string;
  created?: Date;
  modified?: Date;
  removed?: Date;
  user?: User;
};

export default class File extends Entity {
  private _url?: string;
  private _internalDirectory?: string;
  private _user?: User;

  constructor(data: FileInputDTO) {
    super(data);
    this._url = data.url;
    this._internalDirectory = data.internalDirectory;
    this._user = data.user;
  }

  get url(): string {
    return this._url;
  }

  get internalDirectory(): string {
    return this._internalDirectory;
  }

  get user(): User {
    return this._user;
  }

  toJson(): FileOutputDTO {
    return {
      id: this.id,
      dbId: this.dbId,
      url: this._url,
      internalDirectory: this._internalDirectory,
      created: this.created,
      modified: this.modified,
      removed: this.removed,
      user: this._user ? this._user.toJson() : undefined,
    };
  }
}
