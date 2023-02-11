import { generateControllers } from 'controllers/generate';
import { DefaultState, Next } from 'koa';
import Router from 'koa-router';
import { middleware } from 'middlewares/middleware';
import { DefaultCtx } from 'types/request.types';

const generateRouter = new Router<DefaultState, DefaultCtx>();

generateRouter.post('/img', middleware, async (ctx) => {
  await generateControllers(ctx);
});

export { generateRouter };
