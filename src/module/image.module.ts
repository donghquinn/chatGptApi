import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ImageController } from 'controllers/img/generate';
import { GenerateImage } from 'libraries/img/getImages.lib';
import { PrismaLibrary } from 'libraries/common/prisma/prisma.lib';
import { PrismaModule } from './prisma.module';
import { IpMiddleware } from 'middlewares/ip.middlewares';

@Module({
  imports: [PrismaModule],
  controllers: [ImageController],
  providers: [GenerateImage, PrismaLibrary],
})
export class ImageModule {}
