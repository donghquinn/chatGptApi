import { Injectable } from '@nestjs/common';
import { KeyableObject, ResponseBody } from 'types/request.types';

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
