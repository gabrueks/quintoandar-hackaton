import * as express from 'express';

import { Routes } from './routes/Routes';

import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

class AppConfig {
    public app: express.Application;
    public router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
        this.app.use(cors());
    }
}

export default new AppConfig().app;
