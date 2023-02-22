import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { ImageModule } from 'module/image.module';

export const bootstrap = async () => {
  const port = process.env.APP_PORT!;

  const app = await NestFactory.create<NestApplication>(ImageModule);

  app.listen(port);

  const message = 'Server Started';
  const wrapper = '@'.repeat(message.length);

  Logger.log(wrapper);
  Logger.log(message);
  Logger.log(wrapper);
};
