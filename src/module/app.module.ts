import { Module } from '@nestjs/common';
import { ImageModule } from './image.module';
import { AudioModule } from './audio.module';

@Module({ imports: [ImageModule, AudioModule] })
export class AppModule {}
