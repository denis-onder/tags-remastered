import { Request, Response } from 'express';

export default interface BaseController {
  create(request: Request, response: Response): Promise<void>;
  find(request: Request, response: Response): Promise<void>;
  findOne(request: Request, response: Response): Promise<void>;
  findById(request: Request, response: Response): Promise<void>;
  update(request: Request, response: Response): Promise<void>;
  delete(request: Request, response: Response): Promise<void>;
}
