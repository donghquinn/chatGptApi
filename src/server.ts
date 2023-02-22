import { NestApplication, NestFactory } from '@nestjs/core';
import { ImageModule } from 'module/image.module';

export const bootstrap = async () => {
  const port = process.env.APP_PORT!;

  const app = await NestFactory.create<NestApplication>(ImageModule);

  app.listen(port);
};
