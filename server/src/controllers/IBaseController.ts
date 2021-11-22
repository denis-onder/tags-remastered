/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export default interface IBaseController {
  create(req: Request, res: Response, next: NextFunction): Promise<void>;
  find(req: Request, res: Response, next: NextFunction): Promise<void>;
  findOne(req: Request, res: Response, next: NextFunction): Promise<void>;
  findById(req: Request, res: Response, next: NextFunction): Promise<void>;
  update(req: Request, res: Response, next: NextFunction): Promise<void>;
  delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
