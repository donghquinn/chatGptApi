import { NestFactory } from '@nestjs/core';
import { Server } from 'http';
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import cors from 'koa-cors';
import helmet from 'koa-helmet';
import json from 'koa-json';
import logger from 'koa-logger';
import { imageRouter } from 'routes/img';
import { Logger, apiLogger } from 'utilities/logger.utils';

export const bootstrap = async () => {
  const app = await NestFactory.create();
};
