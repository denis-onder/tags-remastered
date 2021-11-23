/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export default interface IBaseController {
  create(req: Request, res: Response, next: NextFunction): void;
  find(req: Request, res: Response, next: NextFunction): void;
  findById(req: Request, res: Response, next: NextFunction): void;
  update(req: Request, res: Response, next: NextFunction): void;
  delete(req: Request, res: Response, next: NextFunction): void;
}
