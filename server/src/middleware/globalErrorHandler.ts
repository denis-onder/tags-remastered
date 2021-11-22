import { NextFunction, Request, Response } from 'express';
import IBaseError from '../errors/IBaseError';

export default (
  error: IBaseError,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(error.status).send(error.message);
  next();
};
