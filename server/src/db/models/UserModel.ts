import argon2 from 'argon2';
import { model, Schema } from 'mongoose';
import User from '../../domain/User';

const schema: Schema<User> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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

schema.pre('save', async function (next) {
  const user: User = this;
  user.password = await argon2.hash(user.password);

  next();
});

export default model<User>('user', schema);
