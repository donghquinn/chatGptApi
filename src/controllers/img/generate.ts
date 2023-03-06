import { Body, Controller, Post } from '@nestjs/common';
import { SetErrorResponse, SetResponse } from 'dto/response.dto';
import { GenerateImage } from 'libraries/img/getImages.lib';
import { RequestTypes } from 'types/request.types';
import { imageBuildValidator } from 'validators/request.validator';

@Controller('img')
export class ImageController {
  constructor(private readonly generateImage: GenerateImage) {}

  @Post('/generate')
  async generateImageRoute(@Body() request: RequestTypes) {
    try {
      const { prompt, number, size } = await imageBuildValidator(request);

      const result = await this.generateImage.requestGenerateImage(prompt, number, size);

      return new SetResponse(200, { ...result });
    } catch (error) {
      return new SetErrorResponse(500, error);
    }
  }
}
