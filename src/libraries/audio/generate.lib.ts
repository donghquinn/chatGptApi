import { Injectable } from '@nestjs/common';
import { PrismaLibrary } from 'libraries/common/prisma/prisma.lib';

@Injectable()
export class GenerateAudio {
  constructor(private prisma: PrismaLibrary) {}

  async generate() {}
}
