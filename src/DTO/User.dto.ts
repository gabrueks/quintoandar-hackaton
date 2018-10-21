import { IUser } from '../Interfaces/User.interface';

import { userModel } from '../Models/UserSchema';

export class User {

    constructor() {}

    async userSignup(newUser: IUser) {
        if (await this.userCheckup(newUser.userDocumentNumber) === true) {
            const newDatabaseUser = new userModel(newUser);
            await newDatabaseUser.save();
            const user: any = await userModel.find({ userDocumentNumber: newUser.userDocumentNumber });
            return {
                success: true,
                _id: user[0]._id
            };
        }
        return {
            success: false,
            _id: ''
        };
    }

    async userVerify(userDocumentNumber, userPassword) {
        const userCount = await userModel.find({ userDocumentNumber: userDocumentNumber, userPassword: userPassword});
        if (userCount.length > 0) {
            return {
                success: true,
                _id: userCount[0]._id
            } 
        } else {
            return {
                success: false,
                _id: ''
            }
        }
    }

    private async userCheckup(newUserDocumentNumber: string) {
        const userCount = await userModel.countDocuments({ userDocumentNumber: newUserDocumentNumber });
        if (userCount >= 1) {
            return false;
        }
        return true;
    }
}
