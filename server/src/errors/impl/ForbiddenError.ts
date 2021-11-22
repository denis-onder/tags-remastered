import IBaseError from '../IBaseError';

export default class ForbiddenError implements IBaseError {
  public status: number = 403;

  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}
