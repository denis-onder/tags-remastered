import argon2 from 'argon2';
import User from '../../domain/User';
import UserService from './UserService';
import RequestError from '../../utils/RequestError';
import { generateToken } from '../../utils/jwt';

export default class AuthService {
  constructor(private userService: UserService) {}

  async register(data: User): Promise<User> {
    return await this.userService.create(data);
  }

  async login(email: string, password: string): Promise<string> {
    const user: User = await this.userService.findOne({ email });

    const match = await argon2.verify(user.password, password);

    if (!match) {
      throw new RequestError(403, 'Your password is incorrect.');
    }

    return generateToken(user.id);
  }
}
