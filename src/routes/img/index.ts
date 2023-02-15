import { DefaultState } from 'koa';
import Router from 'koa-router';
import { DefaultCtx } from 'types/request.types';
import { generateRouter } from './generate.routes';

const imageRouter = new Router<DefaultState, DefaultCtx>({ prefix: '/img' });

imageRouter.use(generateRouter.routes());

export { imageRouter };
