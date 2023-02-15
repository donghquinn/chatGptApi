import { requestGenerateImage } from 'libraries/img/getImages.lib';
import { DefaultCtx } from 'types/request.types';
import { ImageLogger } from 'utilities/logger.utils';
import { setErrorResponse, setResponse } from 'utilities/response.utils';
import { requestBodyValidator } from 'validators/request.validator';

export async function generateImage(ctx: DefaultCtx) {
  try {
    const { prompt, number, size } = await requestBodyValidator(ctx);

    ImageLogger.info('Received Request');

    const imageUrls = await requestGenerateImage(prompt, number, size);

    setResponse(ctx, 200, imageUrls);
  } catch (error) {
    setErrorResponse(ctx, 500, error);
  }
}
