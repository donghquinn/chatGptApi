import { Module } from '@nestjs/common';
import { GenerateImageController } from 'controllers/img/generate';
import { GenerateImage } from 'libraries/img/getImages.lib';

@Module({
  controllers: [GenerateImageController],
  providers: [GenerateImage],
})
export class ImageModule {}
