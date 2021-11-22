import IBaseError from './IBaseError';

export default class BadRequestError implements IBaseError {
  public status = 400;

  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}
