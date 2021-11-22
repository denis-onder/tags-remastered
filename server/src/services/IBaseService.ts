/* eslint-disable no-unused-vars */
export default interface IBaseService<T> {
  create(data: T): Promise<T>;
  find(query: { [key: string]: any }): Promise<Array<T>>;
  findOne(query: { [key: string]: any }): Promise<T>;
  findById(id: string): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}
