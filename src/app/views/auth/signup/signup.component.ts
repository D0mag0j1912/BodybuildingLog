import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { filter, finalize, switchMap, takeUntil, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { MESSAGE_DURATION } from '../../../constants/message-duration.const';
import { Language, WeightFormat } from '../../../models/preferences.model';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupService } from '../../../services/auth/signup.service';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

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
export class SignupComponent implements OnInit {

    form: FormGroup;

    isLoading = false;

    @ViewChild('passEl', { read: IonInput })
    private readonly passwordEl: IonInput;

    @ViewChild('confirmPassEl', { read: IonInput })
    private readonly confirmPasswordEl: IonInput;

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

    ngOnInit(): void {
        this.accessFormData('email')?.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe(_ => {
                //TODO: Focus password field automatically when email is valid
                if (this.accessFormData('email')?.valid) {
                    this.passwordEl?.setFocus();
                }
            });
    }

    async onSubmit(): Promise<void> {
        this.form.statusChanges
            .pipe(
                filter((status: FormControlStatus) => status !== 'PENDING'),
                switchMap(async _ => {
                    if (this.form.valid) {
                        this.isLoading = true;
                        await this.loadingControllerService.displayLoader({ message: 'common.please_wait' });

                        return this.authService.signup(
                            this.accessFormData('language').value as Language,
                            this.accessFormData('weightFormat').value as WeightFormat,
                            this.accessFormData('email').value,
                            this.accessFormData('password').value,
                            this.accessFormData('confirmPassword').value,
                        ).pipe(
                            tap(async (response: AuthResponseData) => {
                                if (response.Success) {
                                    await this.toastControllerService.displayToast({
                                        message: this.translateService.instant(response.Message),
                                        duration: MESSAGE_DURATION.GENERAL,
                                        color: response.Success ? 'primary' : 'danger',
                                    });
                                    await this.navController.navigateForward(['/auth/login']);
                                }
                            }),
                            finalize(async () => {
                                await this.loadingControllerService.dismissLoader();
                                this.isLoading = false;
                                this.changeDetectorRef.markForCheck();
                            }),
                        );
                    }
                    else {
                        return EMPTY;
                    }
                }),
            )
            .subscribe();
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
