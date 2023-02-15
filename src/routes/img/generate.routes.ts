import { generateImage } from 'controllers/img/generate';
import { DefaultState, Next } from 'koa';
import Router from 'koa-router';
import { middleware } from 'middlewares/middleware';
import { DefaultCtx } from 'types/request.types';

const generateRouter = new Router<DefaultState, DefaultCtx>();

generateRouter.post('/img', middleware, async (ctx) => {
  await generateImage(ctx);
});

export { generateRouter };
