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

  constructor(data: EntityDTO) {
    this._id = data.id;
    this._dbId = data.dbId;
    this._created = data.created ? data.created : new Date();
    this._modified = data.modified ? data.modified : new Date();
    this._removed = data.removed ? data.removed : undefined;
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
