import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { LanguageCode, WeightUnit } from '../../../models/common/preferences.type';
import { AuthService } from '../../../services/api/auth/auth.service';
import { SignupService } from '../../../services/api/auth/signup.service';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-format.const';

type FormData = {
    language?: LanguageCode;
    weightUnit?: WeightUnit;
    email?: string;
    password?: string;
    confirmPassword?: string;
};
@Component({
    selector: 'bl-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SignupComponent {

    isLoading = false;

    form: UntypedFormGroup;

    constructor(
        private readonly authService: AuthService,
        private readonly signupService: SignupService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly loadingControllerService: LoadingControllerService,
        private readonly toastControllerService: ToastControllerService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly router: Router,
    ) {
        this.form = new UntypedFormGroup({
            language: new UntypedFormControl('en', [Validators.required]),
            weightUnit: new UntypedFormControl(DEFAULT_WEIGHT_UNIT, [Validators.required]),
            email: new UntypedFormControl(null, {
                validators: [Validators.required, Validators.email],
                asyncValidators: [AuthCustomValidators.isEmailAvailable(this.signupService, this.changeDetectorRef)],
            }),
            password: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)],
            ),
            confirmPassword: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)],
            ),
        }, { validators: AuthCustomValidators.samePasswords() });
    }

    get focusDuration(): number {
        return IonFocusDurations.SIGNUP;
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this.isLoading = true;
        await this.loadingControllerService.displayLoader({ message: 'auth.signing_in' });

        this.authService.signup(
            this.accessFormData('language').value as LanguageCode,
            this.accessFormData('weightUnit').value as WeightUnit,
            this.accessFormData('email').value,
            this.accessFormData('password').value,
            this.accessFormData('confirmPassword').value,
        ).pipe(
            catchError(_ => EMPTY),
            finalize(async () => {
                this.isLoading = false;
                await this.loadingControllerService.dismissLoader();
                this.changeDetectorRef.markForCheck();
            }),
            takeUntil(this.unsubscribeService),
        )
        .subscribe(async response => {
            if (response.Success) {
                await this.toastControllerService.displayToast({
                    message: this.translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: response.Success ? 'primary' : 'danger',
                });
                await this.router.navigate(['/auth/login']);
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): UntypedFormControl {
        return this.form.get(formFieldName) as UntypedFormControl;
    }

}
