import { requestGenerateImage } from 'libraries/getImages.lib';
import { DefaultCtx, RequestTypes } from 'types/request.types';
import { Logger } from 'utilities/logger.utils';
import { setErrorResponse, setResponse } from 'utilities/response.utils';
import { requestBodyValidator } from 'validators/request.validator';

export async function generateControllers(ctx: DefaultCtx) {
  try {
    const { prompt, number, size } = await requestBodyValidator(ctx);

    Logger.info('Received Request');

    const imageUrls = await requestGenerateImage(prompt, number, size);

    setResponse(ctx, 200, imageUrls);
  } catch (error) {
    setErrorResponse(ctx, 500, error);
  }
}
