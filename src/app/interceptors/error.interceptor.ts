import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { captureException } from '@sentry/minimal';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorMessage } from '../models/training/past-trainings-response.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private readonly snackBar: MatSnackBar,
        private readonly translateService: TranslateService,
    ){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler)
        : Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage: string;
                //Server error
                if(error instanceof HttpErrorResponse){
                    captureException(error);
                    if((error.error as ErrorMessage).statusCode === 404){
                        errorMessage = this.translateService.instant('common.errors.unknown_error');
                    }
                    else {
                        if(Array.isArray((error.error as ErrorMessage).message)){
                            errorMessage = this.translateService.instant((error.error as ErrorMessage).message[0].substring(
                                (error.error as ErrorMessage).message[0].indexOf('@') + 1,
                                (error.error as ErrorMessage).message[0].length
                            ));
                        }
                        else {
                            errorMessage = this.translateService.instant((error.error as ErrorMessage).message);
                        }
                    }
                }
                else {
                    errorMessage = this.translateService.instant('common.errors.unknown_error');
                }
                this.snackBar.open(errorMessage, null, {
                    duration: 3000,
                    panelClass: 'app__snackbar-error'
                });
                return throwError(error);
            })
        );
    }
}
