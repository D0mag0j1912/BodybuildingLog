import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { SNACK_BAR_DURATION } from '../../../constants/snack-bar-duration.const';
import { Language, WeightFormat } from '../../../models/preferences.model';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupService } from '../../../services/auth/signup.service';
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
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly toastController: ToastController,
        private readonly router: Router,
    ) {
        this.form = new FormGroup({
            'language': new FormControl('en', [Validators.required]),
            'weightFormat': new FormControl('kg', [Validators.required]),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email],
                [AuthCustomValidators.isEmailAvailable(this.signupService)],
            ),
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
        if (!this.form.valid) {
            const toast = await this.toastController.create({
                message: this.translateService.instant('auth.errors.invalid_form'),
                duration: SNACK_BAR_DURATION.ERROR,
                color: 'danger',
            });
            await toast.present();
            return;
        }
        this.isLoading = true;

        this.authService.signup(
            this.accessFormData('language').value as Language,
            this.accessFormData('weightFormat').value as WeightFormat,
            this.accessFormData('email').value,
            this.accessFormData('password').value,
            this.accessFormData('confirmPassword').value,
        ).pipe(
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe(async (response: AuthResponseData) => {
            if (response.Success) {
                const toast = await this.toastController.create({
                    message: this.translateService.instant(response.Message),
                    duration: SNACK_BAR_DURATION.GENERAL,
                    color: response.Success ? 'primary' : 'danger',
                });
                await toast.present();
                await this.router.navigate(['/auth/login']);
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
