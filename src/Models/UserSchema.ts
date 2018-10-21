import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    userName: { type: String, required: true },
    userBirthDate: { type: String, required: true },
    userRole: { type: String, required: true },
    userResidence: { type: String, required: true },
    userGeneralRegistry: { type: String, required: true },
    userDocumentNumber: { type: String, required: true },
    userPicture: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true }
  },
  {
    strict: true,
  },
);

export const userModel = model('users', UserSchema);
