import { Request } from 'express';
import User from './User';

export default interface AuthorizedRequest extends Request {
  user?: User;
}
