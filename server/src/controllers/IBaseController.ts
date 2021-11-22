/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export default interface IBaseController {
  create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
  find(request: Request, response: Response, next: NextFunction): Promise<void>;
  findOne(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
  findById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
  update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
  delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
}
