import { NextFunction, Request, Response } from 'express';
import RequestError from '../errors/RequestError';

export default (
  error: RequestError,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(error.status).send(error.message);
  next();
};
