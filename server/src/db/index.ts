import mongoose from 'mongoose';
import config from '../config';

export default async (): Promise<boolean> => {
  if (!config.mongoUri) {
    return Promise.resolve(false);
  }

  try {
    await mongoose.connect(config.mongoUri);
    return true;
  } catch (error) {
    return false;
  }
};
