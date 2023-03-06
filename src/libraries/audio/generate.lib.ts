import { Injectable } from '@nestjs/common';
import { AudioError } from 'error/audio.error';
import { PrismaLibrary } from 'libraries/common/prisma/prisma.lib';
import fetch from 'node-fetch';
import { CreateTranslationResponse } from 'openai';
import { tokenAndUrlValidator } from 'validators/generate.validator';

@Injectable()
export class GenerateAudio {
  constructor(private prisma: PrismaLibrary) {}

  async transaltion(file: string, prompt?: string, response_format?: string) {
    try {
      const url = process.env.CHATGPT_AUDIO_URL!;
      const token = process.env.CHATGPT_API_TOKEN!;

      const { token: validatedToken, url: validatedUrl } = await tokenAndUrlValidator(token, url);

      const headers = {
        'content-type': 'application/json',
        authorization: `Bearer ${validatedToken}`,
      };

      const options = {
        headers,
        method: 'POST',
        body: JSON.stringify({
          prompt,
          file,
          response_format,
        }),
      };

      const response = (await (await fetch(validatedUrl, options)).json()) as CreateTranslationResponse;

      if (!response || response === undefined) {
        return 'Receive';
      }

      const transalation = response.text;

      await this.prisma.audio.create({
        data: { prompt: prompt!, response_format: response_format!, response: transalation },
      });

      return transalation;
    } catch (error) {
      throw new AudioError(
        'Audio Translation',
        'Audio Error',
        error instanceof Error ? error : new Error(JSON.stringify(error)),
      );
    }
  }
}
