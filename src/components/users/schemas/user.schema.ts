import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    fullname: String,
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
