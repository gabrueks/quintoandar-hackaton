import { Schema, model } from 'mongoose';

const ResidenceConfirmationSchema = new Schema(
  {
    residenceID: { type: String, required: true },
    residenceEnterDate: { type: Array, required: true }
  },
  {
    strict: true,
  },
);

export const residenceConfirmationModel = model('residenceConfirmation', ResidenceConfirmationSchema);
