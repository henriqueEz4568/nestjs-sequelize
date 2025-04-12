import { UUIDV4 } from 'sequelize';

export type EntityDTO = {
  id?: string;
  dbId?: number;
  created?: Date;
  modified?: Date;
  removed?: Date;
};

export default class Entity {
  private _id: string;
  private _dbId?: number;
  private _created: Date;
  private _modified: Date;
  private _removed?: Date;

  private _notifications: Notification;
  private _errors: Notification;

  constructor(data: EntityDTO) {
    this._id = data.id;
    this._dbId = data.dbId;
    this._created = data.created ? data.created : new Date();
    this._modified = data.modified ? data.modified : new Date();
    this._removed = data.removed ? data.removed : undefined;
    this.validateEntity();
  }

  get notifications(): Notification {
    return this._notifications;
  }

  get errors(): Notification {
    return this._errors;
  }

  private validateEntity(): void {
    if (!this._id || this._id === '') {
      this._id = String(UUIDV4);
    }

    if (!this._modified) {
      throw new Error('Modified is not defined');
    }
  }

  get id(): string {
    return this._id;
  }

  get dbId(): number {
    return this._dbId;
  }

  get created(): Date {
    return this._created;
  }

  get modified(): Date {
    return this._modified;
  }

  get removed(): Date | undefined {
    return this._removed;
  }

  delete(date: Date = new Date()): void {
    this._removed = date;
  }
}
