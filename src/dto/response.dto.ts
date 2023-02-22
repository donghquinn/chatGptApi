import { Injectable } from '@nestjs/common';
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
    this.resCode = resCode.toString();
    this.dataRes = null;
    this.errMsg = errorMessgaeArray;
  }
  resCode: string;
  dataRes: null;
  errMsg: string[];
}
