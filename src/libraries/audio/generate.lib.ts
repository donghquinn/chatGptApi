import { Injectable } from '@nestjs/common';
import { AudioError } from 'error/audio.error';
import { PrismaLibrary } from 'libraries/common/prisma/prisma.lib';
import { tokenAndUrlValidator } from 'validators/generate.validator';

@Injectable()
export class GenerateAudio {
  constructor(private prisma: PrismaLibrary) {}

  async transaltion(file: string, prompt?: string) {
    try {
      const url = process.env.CHATGPT_URL!;
      const token = process.env.CHATGPT_API_TOKEN!;

      const { token: validatedToken, url: validatedUrl } = await tokenAndUrlValidator(token, url);

      const headers = {
        'content-type': 'application/json',
        authorization: `Bearer ${validatedToken}`,
      };
    } catch (error) {
      throw new AudioError(
        'Audio Translation',
        'Audio Error',
        error instanceof Error ? error : new Error(JSON.stringify(error)),
      );
    }
  }
}
