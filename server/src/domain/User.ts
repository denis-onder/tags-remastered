import { Schema } from 'mongoose';

export interface UserCredentials {
  email: string;
  password: string;
}

export default interface User extends UserCredentials {
  _id: string | Schema.Types.ObjectId;
  displayName: string;
}
