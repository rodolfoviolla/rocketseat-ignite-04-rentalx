import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { appError } from './middlewares/appError';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
const port = 3333;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(appError);

app.listen(port, () => console.log(`-> Server running on port ${port}`));
