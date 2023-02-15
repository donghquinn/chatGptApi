import { DefaultState } from 'koa';
import Router from 'koa-router';
import { DefaultCtx } from 'types/request.types';
import { generateRouter } from './generate.routes';

const imageRouter = new Router<DefaultState, DefaultCtx>({ prefix: '/api' });

imageRouter.use(generateRouter.routes());

export { imageRouter };
