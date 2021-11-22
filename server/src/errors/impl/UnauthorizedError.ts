import IBaseError from '../IBaseError';

export default class UnauthorizedError implements IBaseError {
  public status: number = 401;

  public message: string = 'Unauthorized.';
}
