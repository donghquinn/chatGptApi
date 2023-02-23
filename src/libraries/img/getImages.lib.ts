import { Injectable } from '@nestjs/common';
import { ImageError } from 'error/img.error';
import fetch from 'node-fetch';
import { ImagesResponse } from 'openai';
import { SizeTypes } from 'types/request.types';
import { ImageLogger } from 'utilities/logger.utils';
import { tokenAndUrlValidator } from 'validators/generate.validator';
import { PrismaLibrary } from './prisma/prisma.lib';

/**
 * 이미지 생성 요청
 * @param promt: 이미지 요청 내용
 * @param number: 생성할 이미지 개수
 * @param size: 이미지 사이즈
 * @returns img url
 */
@Injectable()
export class GenerateImage {
  constructor(private prisma: PrismaLibrary) {}

  async requestGenerateImage(prompt: string, number: number, size: SizeTypes) {
    const url = process.env.CHATGPT_URL!;
    const token = process.env.CHATGPT_API_TOKEN!;

    const imgUrlArray = [];

    try {
      if (number > 5) {
        return ['Too many Requests. No more than 4'];
      }

      const { token: validatedToken, url: validatedUrl } = await tokenAndUrlValidator(token, url);

      const headers = {
        'content-type': 'application/json',
        authorization: `Bearer ${validatedToken}`,
      };

      const options = {
        headers,
        method: 'POST',
        body: JSON.stringify({
          prompt: prompt,
          n: number,
          size: size,
        }),
      };

      const response = (await (await fetch(validatedUrl, options)).json()) as ImagesResponse;

      ImageLogger.debug('We Received Data: %o', { response });

      const imgData = response.data;

      ImageLogger.info('Data: %o', { imgData });

      imgUrlArray.push(...imgData);

      await this.prisma.image.create({ data: { prompt, size, number, img: imgUrlArray.toString() } });

      return imgUrlArray;
    } catch (error) {
      ImageLogger.error(
        `[GENERATE] Request Failed: %o`,
        error instanceof Error ? error : new Error(JSON.stringify(error)),
      );

      throw new ImageError(
        `[GENERATE]`,
        'Request Failed',
        error instanceof Error ? error : new Error(JSON.stringify(error)),
      );
    }
  }
}
