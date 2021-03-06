import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import AuthController from './controllers/impl/AuthController';
import LinkController from './controllers/impl/LinkController';
import authMiddleware from './middleware/authMiddleware';
import globalErrorHandler from './middleware/globalErrorHandler';
import logger from './middleware/logger';
import AuthService from './services/impl/AuthService';
import LinkService from './services/impl/LinkService';
import UserService from './services/impl/UserService';
import databaseConnection from './db';

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

    this.application.use(bodyParser.urlencoded());
    this.application.use(bodyParser.json());
    this.application.use(cors());

    this.buildControllers();

    // Apply the global error handler
    this.application.use(globalErrorHandler);

    databaseConnection().then((connected) => {
      if (!connected) process.exit(1);

      // eslint-disable-next-line no-console
      console.log('Database connection established!');

      this.application.listen(config.port, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running!\nhttp://localhost:${config.port}`);
      });
    });
  }
}
