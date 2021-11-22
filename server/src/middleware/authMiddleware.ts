import { Response, NextFunction } from 'express';
import { decodeToken } from '../utils/jwt';
import AuthorizedRequest from '../domain/AuthorizedRequest';

export default async (
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) => {
  const token: string = (req.headers.authorization || '').replace('Bearer', '');
  const userId = decodeToken(token);

  if (!userId) {
    res.status(401).send('Unauthorized');
  } else {
    // Find the user and set it as `req.user`
    // req.user = await UserModel.findById(userId);
    next();
  }
};
