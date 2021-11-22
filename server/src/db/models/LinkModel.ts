import { model, Schema } from 'mongoose';
import Link from '../../domain/Link';

const schema: Schema<Link> = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  url: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

export default model<Link>('link', schema);
