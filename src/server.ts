import Koa from 'koa';
import json from 'koa-json';
import cors from 'koa-cors';
import bodyparser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import { Server } from 'http';
import { Logger, apiLogger } from 'utilities/logger.utils';
import { routerV1 } from 'routes/img';

export class KoaServer {
  private koa: Koa;

  private server: Server | null;

  private port: number;

  constructor() {
    this.koa = new Koa();

    this.server = null;

    this.port = Number(process.env.APP_PORT);
  }

  attachMiddleware() {
    this.koa.use(helmet());
    this.koa.use(cors());
    this.koa.use(json());
    this.koa.use(bodyparser());
    this.koa.use(logger((str) => apiLogger.info(str)));

    this.koa.use(routerV1.routes());
    this.koa.use(routerV1.allowedMethods());
  }

  start() {
    if (!this.server) {
      this.attachMiddleware();

      this.server = this.koa.listen(this.port, () => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const message = `[SERVER] Server is Listening On ${process.env.APP_PORT}`;
        const wrapChar = '@'.repeat(message.length);

        Logger.info(wrapChar);
        Logger.info(message);
        Logger.info(wrapChar);
      });
      return;
    }

    apiLogger.info('[SERVER] Server Already Started. Igrnored');
  }

  stop() {
    if (this.server) {
      const listening = this.server;

      if (listening) {
        this.server.close();

        Logger.info('[SERVER] Server Closed');
      }
    }
  }
}
