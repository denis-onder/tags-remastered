import ResourceNotFoundError from '../../errors/ResourceNotFoundError';
import UserModel from '../../db/models/UserModel';
import User from '../../domain/User';
import BaseService from '../BaseService';
import RequestError from '../../errors/RequestError';

export default class UserService implements BaseService<User> {
  async create(data: User): Promise<User> {
    try {
      // Validate the user prior to creation and throw error if any
      return await new UserModel(data).save();
    } catch (error) {
      throw error;
    }
  }

  async find(query: { [key: string]: any }): Promise<User[]> {
    try {
      return await UserModel.find(query);
    } catch (error) {
      throw error;
    }
  }

  async findOne(query: { [key: string]: any }): Promise<User> {
    try {
      const user: User = (await UserModel.findOne(query)) as User;

      if (!user) {
        throw new ResourceNotFoundError();
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user: User = (await UserModel.findById(id)) as User;

      if (!user) {
        throw new ResourceNotFoundError();
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    try {
      const result = await UserModel.findByIdAndUpdate(id, data);

      if (!result) {
        throw new RequestError(400, 'Invalid request. Please try again.');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await UserModel.findByIdAndDelete(id);

      if (!result) {
        throw new ResourceNotFoundError();
      }

      return Boolean(result);
    } catch (error) {
      throw error;
    }
  }
}
