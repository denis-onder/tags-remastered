export default interface BaseService<T> {
  create(data: T): Promise<T>;
  find(query: { [key: string]: any }): Promise<Array<T>>;
  findOne(query: { [key: string]: any }): Promise<T>;
  findById(id: number): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<boolean>;
}
