import { Request, Response, Router } from 'express';
import AuthService from '../../services/impl/AuthService';
import User from '../../domain/User';

export default class AuthController {
  public router: Router;

  constructor(private authService: AuthService) {
    this.router = Router();
    this.router.post('/register', this.register);
  }

  async register(req: Request, res: Response): Promise<void> {
    const data: User = req.body;

    const response = await this.authService.register(data);

    res.status(200).json(response);
  }
}
