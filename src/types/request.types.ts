import { Context } from 'koa';

export type DefaultCtx = GenerateImage;

export interface GenerateImage extends Context {
  clientid: string;
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

export interface RequestValidateType {
  prompt: string;
  number: number;
  size: SizeTypes;
}

export type SizeTypes = '256x256' | '512x512' | '1024x1024';
