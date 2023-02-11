import axios, { AxiosError } from 'axios';
import { ImageError } from 'error/img.error';
import fetch from 'node-fetch';
import { Configuration, ImagesResponse, OpenAIApi } from 'openai';
import { RequestTypes, SizeTypes } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';
import { tokenAndUrlValidator } from 'validators/generate.validator';

/**
 * 이미지 생성 요청
 * promt: 이미지 요청 내용
 * number: 생성할 이미지 개수
 * size: 이미지 사이즈
 */
export async function requestGenerateImage(prompt: string, number: number, size: SizeTypes) {
  const url = process.env.CHATGPT_URL!;
  const token = process.env.API_TOKEN!;

  const imgUrlArray = [];

  try {
    const { token: validatedToken, url: validatedUrl } = await tokenAndUrlValidator(token, url);

    const headers = {
      'content-type': 'application/json',

      authorization: `Bearer ${validatedToken}`,
    };

    Logger.info(JSON.stringify(headers));

    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify({
        // id: 'HTTP_FIXED',
        // withcredentials: true,
        prompt: prompt,
        n: number,
        size: size,
      }),
    };

    const response = await (await fetch(validatedUrl, options)).json();

    Logger.info('Response: %o', { response });

    const { data } = response as ImagesResponse;

    Logger.info('Data: %o', { data });

    imgUrlArray.push(...data);

    return imgUrlArray;
  } catch (error) {
    Logger.error(`[GENERATE] Request Failed: ${error}`);

    throw new ImageError(
      `[GENERATE]`,
      'Request Failed',
      error instanceof Error ? error : new Error(JSON.stringify(error)),
    );
  }
}
