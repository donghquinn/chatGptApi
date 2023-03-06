import { Body, Controller, Post } from '@nestjs/common';
import { SetErrorResponse } from 'dto/response.dto';
import { Request } from 'koa';
import { GenerateAudio } from 'libraries/audio/generate.lib';

@Controller('audio')
export class AudioController {
  constructor(private readonly translator: GenerateAudio) {}

  @Post('/translate')
  async generateTranslate(@Body() request: Request) {
    try {
      await this.translator.transaltion();
    } catch (error) {
      return new SetErrorResponse(500, error);
    }
  }
}
