import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { LanguageCode, WeightFormat } from '../../../models/types/preferences.type';
import { AuthService } from '../../../services/api/auth/auth.service';
import { SignupService } from '../../../services/api/auth/signup.service';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';

type FormData = {
    language?: LanguageCode;
    weightFormat?: WeightFormat;
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

    form: FormGroup;

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
        this.form = new FormGroup({
            language: new FormControl('en', [Validators.required]),
            weightFormat: new FormControl('kg', [Validators.required]),
            email: new FormControl(null, {
                validators: [Validators.required, Validators.email],
                asyncValidators: [AuthCustomValidators.isEmailAvailable(this.signupService, this.changeDetectorRef)],
            }),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)],
            ),
            confirmPassword: new FormControl(null, [
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
            this.accessFormData('weightFormat').value as WeightFormat,
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

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
