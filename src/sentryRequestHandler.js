import * as Sentry from '@sentry/node';

export default (initConfig = {}, requestHandlerConfig = {}) => {
    if (initConfig.dsn) {
        throw new Error('Must pass DSN to Sentry configuration!');
    }

    Sentry.init(initConfig);
    return Sentry.Handlers.requestHandler(requestHandlerConfig);
};
