import { DefaultState } from 'koa';
import Router from 'koa-router';
import { DefaultCtx } from 'types/request.types';
import { generateRouter } from './generate.routes';

const routerV1 = new Router<DefaultState, DefaultCtx>({ prefix: '/api' });

routerV1.use(generateRouter.routes());

export { routerV1 };
