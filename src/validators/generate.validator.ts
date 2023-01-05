import { Logger } from 'utilities/logger.utils';
import { z } from 'zod';

export const tokenAndUrlValidator = async (token: string | undefined, url: string | undefined) => {
  try {
    const scheme = z.object({ token: z.string(), url: z.string() }).strict();

    const validated = await scheme.parseAsync({ token, url });

    return validated;
  } catch (error) {
    Logger.error(`[Validator] Token And Url Parsing Failed: ${JSON.stringify(error)}`);

    throw new Error(`[Validator] Token And Url Parsing Failed: ${JSON.stringify(error)}`);
  }
};
