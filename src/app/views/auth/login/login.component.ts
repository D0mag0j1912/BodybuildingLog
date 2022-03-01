import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { IonInput, ToastController } from '@ionic/angular';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { MESSAGE_DURATION } from '../../../constants/message-duration.const';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';

type FormData = {
    email?: string;
    password?: string;
};

@Component({
    selector: 'bl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class LoginComponent implements OnInit {

    isLoading = false;

    form: FormGroup;

    @ViewChild('passwordEl', { read: IonInput })
    private readonly passwordInput: IonInput;

    constructor(
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly loginService: LoginService,
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly toastController: ToastController,
    ) {
        this.form = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20),
            ]),
        }, { asyncValidators: AuthCustomValidators.passwordFitsEmail(
            this.loginService,
            this.changeDetectorRef) });
    }

    ngOnInit(): void {
        this.accessFormData('email')?.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
            ).subscribe(async _ => {
                if (this.accessFormData('email')?.valid) {
                    await this.passwordInput.setFocus();
                }
            });
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            //TODO: test toast
            const toast = await this.toastController.create({
                message: this.translateService.instant('auth.errors.invalid_form'),
                duration: MESSAGE_DURATION.ERROR,
                color: '#c62828',
            });
            await toast.present();
            return;
        }
        this.isLoading = true;

        this.authService.login(
            this.accessFormData('email').value as string,
            this.accessFormData('password').value as string,
        ).pipe(
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe(async (response: AuthResponseData) => {
            if (response) {
                //TODO: test toast
                const toast = await this.toastController.create({
                    message: this.translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: response.Token ? '#009688' : '#c62828',
                });
                await toast.present();
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
