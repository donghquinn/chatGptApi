import { Injectable } from '@nestjs/common';
import { ImageError } from 'error/img.error';
import { KeyableObject, ResponseBody } from 'types/request.types';
import { ZodError } from 'zod';

@Injectable()
export class SetResponse implements ResponseBody {
  constructor(resCode: number, data?: KeyableObject) {
    this.resCode = resCode.toString();
    this.dataRes = data ?? null;
    this.errMsg = [];
  }
  resCode: string;
  dataRes: KeyableObject | null;
  errMsg: string[];
}

@Injectable()
export class SetErrorResponse implements ResponseBody {
  constructor(resCode: number, error: unknown) {
    const errorMessgaeArray = [];

    if (error instanceof ZodError) {
      errorMessgaeArray.push(error.name, error.message);
    }

    if (error instanceof ImageError) {
      errorMessgaeArray.push(error.type, error.message);
    }

    if (typeof error === 'string') errorMessgaeArray.push(error);

    this.resCode = resCode.toString();
    this.dataRes = null;
    this.errMsg = errorMessgaeArray;
  }

  resCode: string;
  dataRes: null;
  errMsg: string[];
}
