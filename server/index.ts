import { Hono } from 'hono';
import authController from './modules/auth';

const app = new Hono().basePath('/api');

const routes = app.route('/auth', authController);

export type AppType = typeof routes;
export default app;
