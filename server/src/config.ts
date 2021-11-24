import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.SERVER_PORT || 8080,
  secret: process.env.JWT_SECRET || 'SECRET',
  mongoUri: process.env.MONGO_URI || null,
};
