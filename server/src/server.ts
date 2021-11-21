import express, { Application } from 'express';
import config from './config';

export default class Server {
  private application: Application;

  constructor() {
    this.application = express();
  }

  public start() {
    this.application.listen(config.port, () => {
      console.log(`Server running!\nhttp://localhost:${config.port}`);
    });
  }
}
