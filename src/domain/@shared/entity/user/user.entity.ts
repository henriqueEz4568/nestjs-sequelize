import Entity from "../entity";

export type EntityDTO = {
  id?: string;
  dbId?: number;
  created?: Date;
  modified?: Date;
  removed?: Date;
};
export type UserInputDTO = {
  id?: string;
  dbId?: number;
  name: string;
  created?: Date;
  modified?: Date;
  removed?: Date;
};
export default class User extends Entity {
  private _name: string;

  constructor(data: UserInputDTO) {
    super(data);
    this._name = data.name;
  }
get name(): string {
    return this._name;
}
}
