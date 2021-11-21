import { NextFunction, Request, Response, Router } from 'express';
import AuthService from '../../services/impl/AuthService';
import User from '../../domain/User';

export default class AuthController {
  public router: Router;

  constructor(private authService: AuthService) {
    this.router = Router();
    this.router.post('/register', this.register);
    this.router.post('/login', this.login);
  }

  async register(req: Request, res: Response) {
    const data: User = req.body;

    const response = await this.authService.register(data);

    res.status(200).json(response);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    next({
      status: 500,
      message: 'Not implemented yet.',
    });
  }
}
