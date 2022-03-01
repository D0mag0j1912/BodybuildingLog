import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { captureException } from '@sentry/minimal';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../constants/message-duration.const';
import { ErrorMessage } from '../models/common/interfaces/common.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private readonly toastController: ToastController,
        private readonly translateService: TranslateService,
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage: string;
                if (error instanceof HttpErrorResponse) {
                    captureException(error);
                    if (!window.navigator.onLine) {
                        errorMessage = this.translateService.instant('common.errors.internet_required');
                    }
                    else {
                        if ((error.error as ErrorMessage).statusCode === 404) {
                            errorMessage = this.translateService.instant('common.errors.unknown_error');
                        }
                        else {
                            if (Array.isArray((error.error as ErrorMessage).message)) {
                                errorMessage = this.translateService.instant((error.error as ErrorMessage).message[0].substring(
                                    (error.error as ErrorMessage).message[0].indexOf('@') + 1,
                                    (error.error as ErrorMessage).message[0].length,
                                ));
                            }
                            else {
                                errorMessage = this.translateService.instant((error.error as ErrorMessage).message);
                            }
                        }
                    }
                }
                else {
                    errorMessage = this.translateService.instant('common.errors.unknown_error');
                }
                void this.toastController.create({
                    message: errorMessage,
                    duration: MESSAGE_DURATION.ERROR,
                    color: 'danger',
                }).then(async (value: HTMLIonToastElement) => value.present());
                return throwError(error);
            }),
        );
    }
}
