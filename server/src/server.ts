import express, { Application } from 'express';
import config from './config';
import AuthController from './controllers/impl/AuthController';
import LinkController from './controllers/impl/LinkController';
import authMiddleware from './middleware/authMiddleware';
import globalErrorHandler from './middleware/globalErrorHandler';
import logger from './middleware/logger';
import AuthService from './services/impl/AuthService';
import LinkService from './services/impl/LinkService';
import UserService from './services/impl/UserService';

export default class Server {
  private application: Application;

  constructor() {
    this.application = express();
  }

  private buildControllers(): void {
    // Build services for injection
    const userService = new UserService();
    const linkService = new LinkService();
    const authService = new AuthService(userService);

    // Build controllers
    const authController = new AuthController(authService);
    const linkController = new LinkController(linkService);

    // Set controller routes
    this.application.use('/auth', authController.router);
    this.application.use('/links', authMiddleware, linkController.router);
  }

  public start() {
    if (process.env.NODE_ENV === 'development') {
      // Apply the logger middleware
      this.application.use(logger);
    }

    this.buildControllers();

    // Apply the global error handler
    this.application.use(globalErrorHandler);

    this.application.listen(config.port, () => {
      console.log(`Server running!\nhttp://localhost:${config.port}`);
    });
  }
}
