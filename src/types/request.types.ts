import { Context } from 'koa';

export type DefaultCtx = GenerateImage;

export interface GenerateImage extends Context {
  prompt: string;
  number: string;
  size: SizeTypes;
  body: ResponseBody;
}

export type ResponseBody = {
  resCode: string;
  dataRes: KeyableObject | null;
  errMsg: string | string[];
};

export interface KeyableObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface RequestTypes {
  prompt: string;
  n: number;
  size: SizeTypes;
}

export type SizeTypes = '256x256' | '512x512' | '1024x1024';
