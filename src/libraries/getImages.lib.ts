import axios, { AxiosError } from 'axios';
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
      'Content-Type': 'application/json',
      withCredentials: true,
      Authorization: `Bearer ${validatedToken}`,
    };

    Logger.info(JSON.stringify(headers));

    const bodyData = {
      prompt: prompt,
      n: number,
      size: size,
    };

    const response = await axios.post<ImagesResponse>(validatedUrl, {
      headers,
      bodyData,
    });

    const { data } = response;

    imgUrlArray.push(...data.data);

    return imgUrlArray;
  } catch (error) {
    Logger.error(`[GENERATE] Request Failed: ${JSON.stringify(error)}`);

    throw new Error(`[GENERATE] Request Failed: ${JSON.stringify(error)}`);
  }
}
