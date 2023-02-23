import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Response } from 'koa';
import { DefaultCtx } from 'types/request.types';

@Injectable()
export class IpMiddleware implements NestMiddleware {
  use(req: DefaultCtx, res: any, next: () => void) {
    Logger.log(req.ip);

    next();
  }
}
