import { Module } from '@nestjs/common';
import { PrismaLibrary } from 'libraries/img/prisma/prisma.lib';

@Module({ providers: [PrismaLibrary], exports: [PrismaLibrary] })
export class PrismaModule {}
