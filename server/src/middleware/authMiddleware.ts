import { Response, NextFunction } from 'express';
import { decodeToken } from '../utils/jwt';
import AuthorizedRequest from '../domain/AuthorizedRequest';
import UnauthorizedError from '../errors/impl/UnauthorizedError';
import UserModel from '../db/models/UserModel';
import User from '../domain/User';

export default async (
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token: string = (req.headers.authorization || '').replace(
      'Bearer',
      ''
    );

    if (!token) {
      throw new UnauthorizedError();
    }

    const userId = decodeToken(token);

    if (!userId) {
      throw new UnauthorizedError();
    }

    // Find the user and set it as `req.user`
    const user: User = (await UserModel.findById(userId)) as User;

    if (user) {
      req.user = user;
      next();
    } else {
      throw new UnauthorizedError();
    }
  } catch (error: any) {
    // Send a set-cookie header to override the existing token to null
    res.status(error.status).send(error.message);
  }
};
