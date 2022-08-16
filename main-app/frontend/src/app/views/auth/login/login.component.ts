import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { AuthService } from '../../../services/api/auth/auth.service';
import { LoginService } from '../../../services/api/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';

@Component({
    selector: 'bl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class LoginComponent {

    isLoading = false;

    form = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
        ]),
    }, { asyncValidators: AuthCustomValidators.passwordFitsEmail(
        this._loginService,
        this._changeDetectorRef) });

    constructor(
        private readonly _unsubscribeService: UnsubscribeService,
        private readonly _translateService: TranslateService,
        private readonly _loginService: LoginService,
        private readonly _authService: AuthService,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _router: Router,
        private readonly _loadingControllerService: LoadingControllerService,
        private readonly _toastControllerService: ToastControllerService,
    ) { }

    get focusDuration(): number {
        return IonFocusDurations.LOGIN;
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this.isLoading = true;
        await this._loadingControllerService.displayLoader({ message: 'auth.logging_in' });

        this._authService.login(
            this.form.get('email').value,
            this.form.get('password').value,
        ).pipe(
            catchError(_ => EMPTY),
            finalize(async () => {
                this.isLoading = false;
                await this._loadingControllerService.dismissLoader();
                this._changeDetectorRef.markForCheck();
            }),
            takeUntil(this._unsubscribeService),
        ).subscribe(async (response: AuthResponseData) => {
            if (response) {
                await this._toastControllerService.displayToast({
                    message: this._translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: response.Token ? 'primary' : 'danger',
                });
                await this._router.navigate(['/training/new-training']);
            }
        });
    }

}
