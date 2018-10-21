import { Residence } from '../DTO/Residence.dto';

export class ConfirmationService {
    constructor() {}

    async confirmResidence(residenceConfirmation: any) {
        const residence = new Residence();
        const residences = await residence.residenceConfirmation(residenceConfirmation);
        return true;
    }
}
