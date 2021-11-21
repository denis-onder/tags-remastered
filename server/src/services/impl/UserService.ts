import User from '../../domain/User';
import BaseService from '../BaseService';

export default class UserService implements BaseService<User> {
  create(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  find(query: { [key: string]: any }): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findOne(query: { [key: string]: any }): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
