import { ErrorHandler, Injectable } from '@angular/core';
import { captureException } from '@sentry/minimal';

@Injectable()
export class SentryService implements ErrorHandler {

    handleError(error: unknown): void {
        captureException(error);
        throw error;
    }

}
