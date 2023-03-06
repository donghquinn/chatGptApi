import { ImageRequestTypes, RequestValidateType, SizeTypes, TranslateRequestTypes } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';
import { z } from 'zod';

export const imageBuildValidator = async (request: ImageRequestTypes): Promise<RequestValidateType> => {
  try {
    const scheme = z.object({ prompt: z.string(), number: z.number(), size: z.custom<SizeTypes>() }).strict();

    const validate = await scheme.parseAsync(request);

    return validate;
  } catch (error) {
    Logger.error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);

    throw new Error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);
  }
};

export const translateValidator = async (request: TranslateRequestTypes) => {
  try {
    const scheme = z
      .object({ file: z.string(), prompt: z.string().optional(), response_format: z.string().optional() })
      .strict();

    const validate = await scheme.parseAsync(request);

    return validate;
  } catch (error) {
    Logger.error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);

    throw new Error(`[Validator] Request Body Parsing Failed: ${JSON.stringify(error)}`);
  }
};
