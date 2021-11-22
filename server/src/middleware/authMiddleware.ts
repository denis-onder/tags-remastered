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
  const token: string = (req.headers.authorization || '').replace('Bearer', '');
  const userId = decodeToken(token);

  const error = new UnauthorizedError();

  if (!token || !userId) {
    res.status(error.status).send(error.message);
    return;
  }

  // Find the user and set it as `req.user`
  const user: User = (await UserModel.findById(userId)) as User;

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(error.status).send(error.message);
  }
};
