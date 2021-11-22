import { Schema } from 'mongoose';

export default interface User {
  id: string | Schema.Types.ObjectId;
  displayName: string;
  email: string;
  password: string;
}
