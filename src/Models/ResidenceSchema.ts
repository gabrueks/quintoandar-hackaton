import { Schema, model } from 'mongoose';

const ResidenceSchema = new Schema(
  {
    residenceAddress: { type: String, required: true },
    residenceAvailability: { type: Boolean, required: true },
    residencePictures: { type: Array, required: true },
    residenceBestDates: { type: Array, required: true },
    residenceRooms: { type: Array, required: true },
    residenceSpace: { type: String, required: true },
    residenceRegion: { type: String, required: true},
    residenceFacilities: { type: Array, required: true },
    residenceOwner: { type: String }
  },
  {
    strict: true,
  },
);

export const residenceModel = model('residences', ResidenceSchema);
