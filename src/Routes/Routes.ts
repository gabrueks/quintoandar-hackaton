import * as express from 'express';

import statusCode from './httpStatus/status';
import url from './URL/url';

export class Routes {
    constructor() {}

    public routes(app: express.Application): void {
        app.route(url.initialURL)
            .get(async (req: express.Request, res: express.Response) => {
                await res.status(statusCode.OK).json({
                    hi: 'there'
                });
            });
    }
}