import Entity from "../entity";


export type UserOutputDTO = {
  id?: string;
  dbId?: number;
  name: string;
  email: string;
  password:string;
  created?: Date;
  modified?: Date;
  removed?: Date;
};

export type UserInputDTO = {
  id?: string;
  dbId?: number;
  name: string;
  email: string;
  password: string;
  created?: Date;
  modified?: Date;
  removed?: Date;
};

export default class User extends Entity {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(data: UserInputDTO) {
    super(data);
    this._email = data.email;
    this._password = data.password;
    this._name = data.name;
  }

  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  toJson(): UserOutputDTO {
    return {
      id: this.id,
      dbId: this.dbId,
      name: this._name,
      email: this._email,
      password:this._password,
      created: this.created,
      modified: this.modified,
      removed: this.removed,
    };
  }
}