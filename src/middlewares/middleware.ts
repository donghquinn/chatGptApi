import { Next } from 'koa';
import { DefaultCtx } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';

export const middleware = async (ctx: DefaultCtx, next: Next) => {
  try {
    if (!ctx.request.body) {
      Logger.info('Request Body Is Empty / undefined. Ignore');

      return;
    }

    return await next();
  } catch (error: unknown) {
    throw new Error(`Received Middleware Error: ${error}`);
  }
};
