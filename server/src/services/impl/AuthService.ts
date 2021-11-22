import argon2 from 'argon2';
import User, { UserCredentials } from '../../domain/User';
import UserService from './UserService';
import { generateToken } from '../../utils/jwt';
import BadRequestError from '../../errors/impl/BadRequestError';
import ForbiddenError from '../../errors/impl/ForbiddenError';
import UserModel from '../../db/models/UserModel';
import { credentialsValidator } from '../../validators/user';

export default class AuthService {
  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private userService: UserService) {}

  async register(data: User): Promise<User> {
    try {
      const existingUser: User | null = await UserModel.findOne({
        email: data.email,
      });

      if (existingUser) {
        throw new ForbiddenError(
          'An account with this email address already exists.'
        );
      }

      const user: User = await this.userService.create(data);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(credentials: UserCredentials): Promise<string> {
    try {
      credentialsValidator(credentials);

      const user: User = await this.userService.findOne({
        email: credentials.email,
      });

      const match = await argon2.verify(user.password, credentials.password);

      if (!match) {
        throw new BadRequestError('Your password is incorrect.');
      }

      const token = generateToken(user._id.toString());

      return token;
    } catch (error) {
      throw error;
    }
  }
}
