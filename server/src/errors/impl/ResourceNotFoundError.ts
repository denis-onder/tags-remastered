import IBaseError from '../IBaseError';

export default class ResourceNotFoundError implements IBaseError {
  public status: number = 404;

  public message: string = 'Resource not found.';
}
