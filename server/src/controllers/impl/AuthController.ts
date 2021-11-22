/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { NextFunction, Request, Response, Router } from 'express';
import AuthService from '../../services/impl/AuthService';
import User, { UserCredentials } from '../../domain/User';
import AuthorizedRequest from '../../domain/AuthorizedRequest';
import authMiddleware from '../../middleware/authMiddleware';

export default class AuthController {
  public router: Router;

  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private authService: AuthService) {
    this.router = Router();
    this.router.post('/register', (req, res, next) =>
      this.register(req, res, next)
    );

    this.router.post('/login', (req, res, next) => this.login(req, res, next));
    this.router.get('/user', authMiddleware, (req, res) =>
      this.getCurrentUser(req, res)
    );
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data: User = req.body;

      const response = await this.authService.register(data);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1);

    try {
      const credentials: UserCredentials = req.body;

      const token: string = await this.authService.login(credentials);

      res
        .status(200)
        .cookie('token', token, {
          expires: expirationDate,
          httpOnly: true,
        })
        .send();
    } catch (error) {
      next(error);
    }
  }

  getCurrentUser(req: AuthorizedRequest, res: Response): void {
    res.status(200).json(req.user as User);
  }
}
