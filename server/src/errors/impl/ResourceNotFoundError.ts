import IBaseError from '../IBaseError';

export default class ResourceNotFoundError implements IBaseError {
  public status: number;

  public message: string;

  constructor() {
    this.status = 404;
    this.message = 'Resource not found.';
  }
}
