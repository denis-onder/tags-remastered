import { NextFunction, Request, Response } from 'express';
import RequestError from '../utils/RequestError';

export default function (
  error: RequestError,
  _: Request,
  res: Response,
  __: NextFunction
) {
  res.status(error.status).send(error.message);
}
