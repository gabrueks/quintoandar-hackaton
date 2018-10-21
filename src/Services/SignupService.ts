import { User } from '../DTO/User.dto';
import { IUser } from '../Interfaces/User.interface';

import { Residence } from '../DTO/Residence.dto';
import { IResidence } from '../Interfaces/Residence.interface';

export class SignupService {
    constructor() {}

    async responseUserCreation(newUser: IUser) {
        const user = new User();
        const userSignupResponse = await user.userSignup(newUser);
        if (userSignupResponse.success === true) {
            return {
                success: true,
                id: userSignupResponse._id,
                message: 'Usuário cadastrado com sucesso.'
            }
        }
        return {
            success: false,
            message: 'Erro ao cadastrar usuário.'
        }
    }

    async responseResidenceCreation(newResidence: IResidence) {
        const residence = new Residence();
        const residenceSignupResponse = await residence.residenceSignup(newResidence);
        if (residenceSignupResponse.success === true) {
            return {
                success: true,
                message: residenceSignupResponse.message
            }
        }
    }
}
