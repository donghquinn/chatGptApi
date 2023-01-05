import { generateControllers } from 'controllers/generate';
import { DefaultState, Next } from 'koa';
import Router from 'koa-router';
import { DefaultCtx } from 'types/request.types';

const generateRouter = new Router<DefaultState, DefaultCtx>();

generateRouter.post('/img', async (ctx, next: Next) => {
  await generateControllers(ctx);

  await next();
});

export { generateRouter };
