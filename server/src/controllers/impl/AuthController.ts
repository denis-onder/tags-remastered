import { Request, Response } from 'express';
import AuthService from '../../services/impl/AuthService';
import User from '../../domain/User';

export default class AuthController {
  constructor(private authService: AuthService) {}

  async register(req: Request, res: Response): Promise<void> {
    const data: User = req.body;

    const response = await this.authService.register(data);

    res.status(200).json(response);
  }
}
