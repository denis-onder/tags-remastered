import IBaseError from '../IBaseError';

export default class NoInformationError implements IBaseError {
  public status: number = 400;

  public message: string = 'Please provide the required information.';
}
