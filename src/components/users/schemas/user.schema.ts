import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    collection: 'users',
    versionKey: false,
  }
);
