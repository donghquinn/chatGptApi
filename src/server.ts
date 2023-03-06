import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from 'module/app.module';

export const bootstrap = async () => {
  const port = process.env.APP_PORT!;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableVersioning();
  app.useBodyParser('json');
  app.enableCors({ credentials: true });

  await app.listen(port);

  const message = 'Server Started';
  const wrapper = '@'.repeat(message.length);

  Logger.log(wrapper);
  Logger.log(message);
  Logger.log(wrapper);
};
