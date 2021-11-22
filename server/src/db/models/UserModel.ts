import User from '../../domain/User';
import { model, Schema } from 'mongoose';

const schema: Schema<User> = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<User>('user', schema);
