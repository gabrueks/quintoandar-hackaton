import { IResidence } from '../Interfaces/Residence.interface';

import { residenceModel } from '../Models/ResidenceSchema';

export class Residence {

    constructor() {}

    async residenceSignup(newResidence: IResidence) {
        const newDatabaseResidence = new residenceModel(newResidence);
        await newDatabaseResidence.save();
        return {
            success: true,
            message: 'Casa cadastrada com sucesso.'
        };
    }

    async residenceConsult(residenceRegion: string) {
        const consultedDatabaseResidence = await residenceModel.find({
            residenceRegion: residenceRegion
        });
        return consultedDatabaseResidence;
    }

    async residenceConsultID(residenceID: string) {
        const consultedResidence = await residenceModel.find({
            _id: residenceID
        });
        return consultedResidence;
    }
}
