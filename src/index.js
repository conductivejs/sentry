import * as Sentry from '@sentry/node';

export { default as sentryHandler } from './sentryHandler';

export default ({ dsn }) => {
    Sentry.init({ dsn });
    return Sentry.Handlers.requestHandler();
};
