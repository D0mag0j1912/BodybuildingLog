import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { LanguageCode, WeightUnit } from '../../../models/common/preferences.type';
import { AuthService } from '../../../services/api/auth/auth.service';
import { SignupService } from '../../../services/api/auth/signup.service';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-unit.const';
import { DEFAULT_LANGUAGE } from '../../../constants/shared/default-language.const';

@Component({
    selector: 'bl-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnDestroy {
    private _isLoading$ = new BehaviorSubject<boolean>(false);
    isLoading$ = this._isLoading$.asObservable();

    form = new FormGroup(
        {
            language: new FormControl<LanguageCode>(DEFAULT_LANGUAGE, [Validators.required]),
            weightUnit: new FormControl<WeightUnit>(DEFAULT_WEIGHT_UNIT, [Validators.required]),
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
                asyncValidators: [
                    AuthCustomValidators.isEmailAvailable(
                        this._signupService,
                        this._changeDetectorRef,
                    ),
                ],
            }),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20),
            ]),
            confirmPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20),
            ]),
        },
        { validators: AuthCustomValidators.samePasswords() },
    );

    constructor(
        private _authService: AuthService,
        private _signupService: SignupService,
        private _translateService: TranslateService,
        private _loadingControllerService: LoadingControllerService,
        private _toastControllerService: ToastControllerService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
    ) {}

    get focusDuration(): number {
        return IonFocusDurations.SIGNUP;
    }

    ngOnDestroy(): void {
        this._isLoading$.complete();
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this._isLoading$.next(true);
        await this._loadingControllerService.displayLoader({ message: 'auth.signing_in' });

        this._authService
            .signup(
                this.form.controls.language.value,
                this.form.controls.weightUnit.value,
                this.form.controls.email.value,
                this.form.controls.password.value,
                this.form.controls.confirmPassword.value,
            )
            .pipe(
                catchError((_) => EMPTY),
                finalize(async () => {
                    this._isLoading$.next(false);
                    await this._loadingControllerService.dismissLoader();
                }),
            )
            .subscribe(async (response) => {
                if (response.Success) {
                    await this._toastControllerService.displayToast({
                        message: this._translateService.instant(response.Message),
                        duration: MESSAGE_DURATION.GENERAL,
                        color: response.Success ? 'primary' : 'danger',
                    });
                    await this._router.navigate(['/auth/login']);
                }
            });
    }
}
