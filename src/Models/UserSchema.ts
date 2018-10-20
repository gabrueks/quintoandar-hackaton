import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    userName: { type: String, required: true }
  },
  {
    strict: true,
  },
);

export const usersModel = model('users', UserSchema);
