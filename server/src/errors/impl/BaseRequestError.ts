import IBaseError from './IBaseError';

export default class BaseRequestError implements IBaseError {
  public status: number;

  public message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}
