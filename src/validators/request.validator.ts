import { CreateImageRequestSizeEnum } from 'openai';
import { DefaultCtx, SizeTypes } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';
import { z } from 'zod';

export const requestBodyValidator = async (ctx: DefaultCtx) => {
  try {
    const scheme = z.object({ prompt: z.string(), number: z.number(), size: z.custom<SizeTypes>() }).strict();

    const validate = await scheme.parseAsync(ctx.request.body);

    return validate;
  } catch (error) {
    Logger.error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);

    throw new Error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);
  }
};
