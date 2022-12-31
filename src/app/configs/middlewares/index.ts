import cors from 'cors';
import type {Express} from 'express';
import routes from '@routes/index';

export default function appMiddlewares(app: Express): void {
	app.use(cors());
	app.use(routes);
}