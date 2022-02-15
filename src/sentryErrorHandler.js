import * as Sentry from '@sentry/node';
import { GenericError } from '@conductive/core/errors';

export default (config) => {
    const { environment, environmentsToHandle } = config;

    const shouldHandleError = (error) => {
        if (error instanceof GenericError) return false;
        if (!environmentsToHandle.includes(environment)) return false;

        return true;
    };

    return Sentry.Handlers.errorHandler({ shouldHandleError });
};
