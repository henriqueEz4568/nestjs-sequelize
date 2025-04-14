export type RepositoryOptions = {
  where?: {
    dbId?: number;
    id?: string;
  };
};

export type RepositoryCount = {
  currentPage?: number;
  limit?: number;
  totalRows?: number;
  totalPages?: number;
};

export type IDeleteParameters = {
  force?: boolean;
};
export default interface IRepositoryInterface<T> {
  getByDbId(dbId: number, transaction?: any): Promise<T>;
  create(entity: T, transaction?: any): Promise<T>;
  delete(dbId: number): Promise<boolean>;
  getAll(data?: RepositoryOptions, transaction?: any): Promise<T[]>;
  getOne(data: RepositoryOptions, transaction?: any): Promise<T>;
  count(data: RepositoryOptions, transaction?: any): Promise<RepositoryCount>;
  save(entity: T, transaction: any): Promise<T>;
}
