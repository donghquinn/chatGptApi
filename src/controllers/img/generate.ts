import { Body, Controller, Post } from '@nestjs/common';
import { SetErrorResponse, SetResponse } from 'dto/response.dto';
import { GenerateImage } from 'libraries/img/getImages.lib';
import { RequestTypes } from 'types/request.types';
import { requestBodyValidator } from 'validators/request.validator';

@Controller('img')
export class GenerateImageController {
  constructor(private readonly generateImage: GenerateImage) {}

  @Post('/generate')
  async generateImageRoute(@Body() request: RequestTypes) {
    try {
      const { prompt, number, size } = await requestBodyValidator(request);

      const result = await this.generateImage.requestGenerateImage(prompt, number, size);
      return new SetResponse(200, { ...result });
    } catch (error) {
      return new SetErrorResponse(500, error);
    }
  }
}
