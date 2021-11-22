import { Schema } from 'mongoose';

export default interface Link {
  id: string | Schema.Types.ObjectId;
  user: string | Schema.Types.ObjectId;
  url: string;
  tags: Array<string>;
}
