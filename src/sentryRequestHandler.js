import * as Sentry from '@sentry/node';

export default (initConfig, requestHandlerConfig) => {
    Sentry.init(initConfig);
    return Sentry.Handlers.requestHandler(requestHandlerConfig);
};
