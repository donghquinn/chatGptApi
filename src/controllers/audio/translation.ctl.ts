import { Body, Controller, Post } from '@nestjs/common';
import { SetErrorResponse, SetResponse } from 'dto/response.dto';
import { Request } from 'koa';
import { GenerateAudio } from 'libraries/audio/generate.lib';
import { TranslateRequestTypes } from 'types/request.types';
import { translateValidator } from 'validators/request.validator';

@Controller('audio')
export class AudioController {
  constructor(private readonly translator: GenerateAudio) {}

  @Post('/translate')
  async generateTranslate(@Body() request: TranslateRequestTypes) {
    try {
      const { file, prompt, response_format } = await translateValidator(request);

      const result = await this.translator.transaltion(file, prompt, response_format);

      return new SetResponse(200, { result });
    } catch (error) {
      return new SetErrorResponse(500, error);
    }
  }
}
