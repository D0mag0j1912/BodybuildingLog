import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { LanguageCodeType, WeightUnitType } from '../../../models/common/preferences.type';
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
})
export class SignupComponent {
    isLoading = false;

    focusDuration = IonFocusDurations.SIGNUP;
    form = new FormGroup(
        {
            language: new FormControl<LanguageCodeType>(DEFAULT_LANGUAGE, [Validators.required]),
            weightUnit: new FormControl<WeightUnitType>(DEFAULT_WEIGHT_UNIT, [Validators.required]),
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

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this.isLoading = true;
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
                    this.isLoading = false;
                    await this._loadingControllerService.dismissLoader();
                }),
            )
            .subscribe(async (response) => {
                if (response.Success) {
                    await this._toastControllerService.displayToast({
                        message: this._translateService.instant(response.Message),
                        duration: response.Success
                            ? MESSAGE_DURATION.GENERAL
                            : MESSAGE_DURATION.ERROR,
                        color: response.Success ? 'primary' : 'danger',
                    });
                    await this._router.navigate(['/auth/login']);
                }
            });
    }
}
