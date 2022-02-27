import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { SNACK_BAR_DURATION } from '../../../constants/snack-bar-duration.const';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

type FormData = {
    email?: string;
    password?: string;
};

@Component({
    selector: 'bl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements AfterViewInit {

    isLoading = false;

    form: FormGroup;

    @ViewChild('emailRef', {
        read: ElementRef,
    })
    private readonly emailInput: ElementRef;

    constructor(
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
    //TODO: fix autofocus
    ngAfterViewInit(): void {
        setTimeout(() => (<HTMLInputElement>this.emailInput?.nativeElement)?.focus());
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            //TODO: test toast
            const toast = await this.toastController.create({
                message: this.translateService.instant('auth.errors.invalid_form'),
                duration: SNACK_BAR_DURATION.ERROR,
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
                    duration: SNACK_BAR_DURATION.GENERAL,
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
