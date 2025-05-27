import { Hono } from 'hono';

const app = new Hono().basePath('/api');

const routes = app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Hono ❤️‍🔥'
  });
});

export type AppType = typeof routes;
export default app;
