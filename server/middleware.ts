import { createMiddleware } from 'hono/factory';

const privateRoutesMiddleware = createMiddleware(async (c, next) => {});
