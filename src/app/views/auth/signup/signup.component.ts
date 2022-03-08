import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY, from } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, take, takeUntil } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../../constants/message-duration.const';
import { Language, WeightFormat } from '../../../models/preferences.model';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupService } from '../../../services/auth/signup.service';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/ion-focus-durations.const';

type FormData = {
    language?: Language;
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

    form: FormGroup;

    constructor(
        private readonly authService: AuthService,
        private readonly signupService: SignupService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly loadingControllerService: LoadingControllerService,
        private readonly toastControllerService: ToastControllerService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly navController: NavController,
    ) {
        this.form = new FormGroup({
            'language': new FormControl('en', [Validators.required]),
            'weightFormat': new FormControl('kg', [Validators.required]),
            'email': new FormControl(null, {
                validators: [Validators.required, Validators.email],
                asyncValidators: [AuthCustomValidators.isEmailAvailable(this.signupService, this.changeDetectorRef)],
                updateOn: 'blur',
            }),
            'password': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)],
            ),
            'confirmPassword': new FormControl(null, [
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
        this.form.statusChanges
            .pipe(
                filter((status: FormControlStatus) => status !== 'PENDING'),
                distinctUntilChanged(),
                take(1),
                switchMap(_ => {
                    if (this.form.valid) {
                        return from(this.loadingControllerService.displayLoader({ message: 'auth.signing_in' }))
                            .pipe(
                                switchMap(_ => this.authService.signup(
                                    this.accessFormData('language').value as Language,
                                    this.accessFormData('weightFormat').value as WeightFormat,
                                    this.accessFormData('email').value,
                                    this.accessFormData('password').value,
                                    this.accessFormData('confirmPassword').value,
                                )),
                            );
                    }
                    else {
                        return EMPTY;
                    }
                }),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(async response => {
                await this.loadingControllerService.dismissLoader();
                if (response.Success) {
                    await this.toastControllerService.displayToast({
                        message: this.translateService.instant(response.Message),
                        duration: MESSAGE_DURATION.GENERAL,
                        color: response.Success ? 'primary' : 'danger',
                    });
                    await this.navController.navigateBack(['/auth/login']);
                }
            });
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
