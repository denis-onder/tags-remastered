import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.SERVER_PORT || 6000,
  secret: process.env.JWT_SECRET || 'asTRTWvcxxLBLk17584_^*rer!#',
};
