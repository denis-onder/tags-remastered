import Link from '../../domain/Link';
import { model, Schema } from 'mongoose';

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
