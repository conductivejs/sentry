import * as Sentry from '@sentry/node';
import { GenericError } from '@conductive/core/errors';

const shouldHandleError = (error) => !(error instanceof GenericError);
export default Sentry.Handlers.errorHandler({ shouldHandleError });
