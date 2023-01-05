import { DefaultContext } from 'koa';
import { Logger } from './logger.utils';

export function setResponse(ctx: DefaultContext, status: number, data?: unknown) {
  const resCode = status.toString();

  const body = {
    resCode,
    dataRes: data ?? null,
  };

  ctx.body = body;

  Logger.info('%o', ctx.body);
}

export function setErrorResponse(ctx: DefaultContext, status: number, error: unknown) {
  const errorMessage = [];

  errorMessage.push(error);

  const resCode = status.toString();

  const body = {
    resCode,
    dataRes: {},
    errMsg: [...errorMessage],
  };

  ctx.body = body;

  Logger.info('%o', ctx.body);
}
