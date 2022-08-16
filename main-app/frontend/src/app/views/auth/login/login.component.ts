import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize } from 'rxjs/operators';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { AuthService } from '../../../services/api/auth/auth.service';
import { LoginService } from '../../../services/api/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';

@Component({
    selector: 'bl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {

    private readonly _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isLoading$: Observable<boolean> = this._isLoading$.asObservable();

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

    ngOnDestroy(): void {
        this._isLoading$.complete();
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this._isLoading$.next(true);
        await this._loadingControllerService.displayLoader({ message: 'auth.logging_in' });

        this._authService.login(
            this.form.get('email').value,
            this.form.get('password').value,
        ).pipe(
            catchError(_ => EMPTY),
            finalize(async () => {
                this._isLoading$.next(false);
                await this._loadingControllerService.dismissLoader();
            }),
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
