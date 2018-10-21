import * as express from 'express';

import { SignupService } from '../Services/SignupService';
import { LoginService } from '../Services/LoginService';
import { ConsultService } from '../Services/ConsultService';
import { ConfirmationService } from '../Services/ConfirmationService';

import statusCode from './httpStatus/status';
import url from './URL/url';

export class Routes {
    constructor() {}

    public routes(app: express.Application): void {
        const signupService = new SignupService();
        const loginService = new LoginService();
        const consultService = new ConsultService();
        const confirmationService = new ConfirmationService();
        app.route(url.userSignup)
            .post(async (req: express.Request, res: express.Response) => {
                const response = await signupService.responseUserCreation(req.body);
                res.status(statusCode.OK).json(response);
            });

        app.route(url.userLogin)
            .post(async (req: express.Request, res: express.Response) => {
                const response = await loginService.responseUserLogin(req.body);
                res.status(statusCode.OK).json(response);
            });

        app.route(url.residenceSignup)
            .post(async (req: express.Request, res: express.Response) => {
                const response = await signupService.responseResidenceCreation(req.body);
                res.status(statusCode.OK).json(response);
            });

        app.route(url.residenceConsult)
            .get(async (req: express.Request, res: express.Response) => {
                const dbParam = req.params.param;
                const response = await consultService.consultResidence(dbParam);
                res.status(statusCode.OK).json(response);
            });
        
        app.route(url.residenceConsultID)
            .get(async (req: express.Request, res: express.Response) => {
                const dbParam = req.params.id;
                const response = await consultService.consultResidenceById(dbParam);
                res.status(statusCode.OK).json(response);
            });

        app.route(url.residenceChangeConfirmation)
            .post(async (req: express.Request, res: express.Response) => {
                const response = await confirmationService.confirmResidence(req.body);
                res.status(statusCode.OK).json(response);
            });
    }
}