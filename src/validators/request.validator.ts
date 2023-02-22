import { CreateImageRequestSizeEnum } from 'openai';
import { DefaultCtx, RequestTypes, RequestValidateType, SizeTypes } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';
import { z } from 'zod';

export const requestBodyValidator = async (request: RequestTypes): Promise<RequestValidateType> => {
  try {
    const scheme = z.object({ prompt: z.string(), number: z.number(), size: z.custom<SizeTypes>() }).strict();

    const validate = await scheme.parseAsync(request);

    return validate;
  } catch (error) {
    Logger.error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);

    throw new Error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);
  }
};
