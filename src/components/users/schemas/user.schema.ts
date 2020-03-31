import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    collection: 'users',
    versionKey: false,
  }
);
