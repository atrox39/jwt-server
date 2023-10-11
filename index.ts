import express from 'express';
import type { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

import api from './src/routes/api.route';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

app.use('/api', api);

app.listen(parseInt(process.env.PORT ?? '3000', 10));
