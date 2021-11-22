import ResourceNotFoundError from '../../errors/impl/ResourceNotFoundError';
import UserModel from '../../db/models/UserModel';
import User from '../../domain/User';
import IBaseService from '../IBaseService';
import BadRequestError from '../../errors/impl/BadRequestError';
import userValidator from '../../validators/user';

export default class UserService implements IBaseService<User> {
  async create(data: User): Promise<User> {
    try {
      userValidator(data);
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
        throw new BadRequestError('Invalid request. Please try again.');
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
