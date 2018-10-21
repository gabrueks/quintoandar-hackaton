import { User } from '../DTO/User.dto';

export class LoginService {
    constructor() {}

    async responseUserLogin(newUser: any) {
        const user = new User();
        const userSignupResponse = await user.userVerify(newUser.userDocumentNumber, newUser.userPassword);
        if(userSignupResponse.success === true) {
            return {
                success: true,
                id: userSignupResponse._id,
                message: 'Usuário logado sucesso.'
            }
        }
        return {
            success: false,
            _id: userSignupResponse._id,
            message: 'Erro ao validar usuário.'
        }
    }
}
