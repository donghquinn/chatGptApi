import { Next } from 'koa';
import { DefaultCtx } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';

export const middleware = async (ctx: DefaultCtx, next: Next) => {
  try {
    const { clientid } = ctx;
    Logger.info('Received ClientId from Context: %o', { clientid });

    return await next();
  } catch (error: unknown) {
    throw new Error(`Received Middleware Error: ${error}`);
  }
};
