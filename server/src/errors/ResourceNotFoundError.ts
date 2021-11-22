export default class ResourceNotFoundError {
  public status: number;

  public message: string;

  constructor() {
    this.status = 404;
    this.message = 'Resource not found.';
  }
}
