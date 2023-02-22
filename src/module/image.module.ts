import { Module } from '@nestjs/common';
import { GenerateImageController } from 'controllers/img/generate';
import { GenerateImage } from 'libraries/img/getImages.lib';
import { PrismaLibrary } from 'libraries/img/prisma/prisma.lib';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GenerateImageController],
  providers: [GenerateImage, PrismaLibrary],
})
export class ImageModule {}
