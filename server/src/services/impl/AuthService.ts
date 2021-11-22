import argon2 from 'argon2';
import User from '../../domain/User';
import UserService from './UserService';
import { generateToken } from '../../utils/jwt';
import BadRequestError from '../../errors/BadRequestError';

export default class AuthService {
  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private userService: UserService) {}

  async register(data: User): Promise<User> {
    try {
      const user: User = await this.userService.create(data);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const user: User = await this.userService.findOne({ email });

      const match = await argon2.verify(user.password, password);

      if (!match) {
        throw new BadRequestError('Your password is incorrect.');
      }

      return generateToken(user.id as string);
    } catch (error) {
      throw error;
    }
  }
}
