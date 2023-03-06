import { Module } from '@nestjs/common';
import { AudioController } from 'controllers/audio/translation.ctl';
import { GenerateAudio } from 'libraries/audio/generate.lib';
import { PrismaLibrary } from 'libraries/common/prisma/prisma.lib';

@Module({
  controllers: [AudioController],
  providers: [PrismaLibrary, GenerateAudio],
})
export class AudioModule {}
