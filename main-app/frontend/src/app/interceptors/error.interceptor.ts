import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { captureException } from '@sentry/minimal';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../constants/shared/message-duration.const';
import { ErrorMessage } from '../models/common/common.model';
import { ToastControllerService } from '../services/shared/toast-controller.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private readonly toastControllerService: ToastControllerService,
        private readonly translateService: TranslateService,
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage: string;
                if (error instanceof HttpErrorResponse) {
                    captureException(error);
                    //TODO: fix for Ionic
                    if (!window.navigator.onLine) {
                        errorMessage = this.translateService.instant(
                            'common.errors.internet_required',
                        );
                    } else {
                        if ((error.error as ErrorMessage).statusCode === 404) {
                            errorMessage = this.translateService.instant(
                                'common.errors.unknown_error',
                            );
                        } else {
                            if (Array.isArray((error.error as ErrorMessage).message)) {
                                errorMessage = this.translateService.instant(
                                    (error.error as ErrorMessage).message[0].substring(
                                        (error.error as ErrorMessage).message[0].indexOf('@') + 1,
                                        (error.error as ErrorMessage).message[0].length,
                                    ),
                                );
                                if (/\d/.test(errorMessage)) {
                                    errorMessage = errorMessage.substring(
                                        errorMessage.search(/\d/) + 2,
                                        errorMessage.length,
                                    );
                                }
                            } else {
                                errorMessage = this.translateService.instant(
                                    (error.error as ErrorMessage).message,
                                );
                            }
                        }
                    }
                } else {
                    errorMessage = this.translateService.instant('common.errors.unknown_error');
                }
                void this.toastControllerService.displayToast({
                    message: errorMessage,
                    duration: MESSAGE_DURATION.ERROR,
                    color: 'danger',
                });
                return throwError(error);
            }),
        );
    }
}
