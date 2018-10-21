import { Residence } from '../DTO/Residence.dto';

export class ConsultService {
    constructor() {}

    async consultResidence(residenceRegion: string) {
        const residence = new Residence();
        const residences = await residence.residenceConsult(residenceRegion);
        return {
            success: true,
            residences: residences,
        }
    }

    async consultResidenceById(residenceID: string) {
        const residence = new Residence();
        const residenceByID = await residence.residenceConsultID(residenceID);
        return {
            success: true,
            residenceDetails: residenceByID
        }
    }
}
