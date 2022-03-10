import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { IonInput, NavController } from '@ionic/angular';
import { EMPTY } from 'rxjs';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { MESSAGE_DURATION } from '../../../constants/message-duration.const';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { IonFocusDurations } from '../../../constants/ion-focus-durations.const';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';

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
        private readonly navController: NavController,
        private readonly loadingControllerService: LoadingControllerService,
        private readonly toastControllerService: ToastControllerService,
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

    get focusDuration(): number {
        return IonFocusDurations.LOGIN;
    }

    ngOnInit(): void {
        /* this.accessFormData('email')?.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
            ).subscribe(async _ => {
                //TODO: fix
                if (this.accessFormData('email')?.valid) {
                    await this.passwordInput.setFocus();
                }
            }); */
    }

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this.isLoading = true;
        await this.loadingControllerService.displayLoader({ message: 'auth.logging_in' });

        this.authService.login(
            this.accessFormData('email').value as string,
            this.accessFormData('password').value as string,
        ).pipe(
            catchError(_ => EMPTY),
            finalize(async () => {
                this.isLoading = false;
                await this.loadingControllerService.dismissLoader();
                this.changeDetectorRef.markForCheck();
            }),
            takeUntil(this.unsubscribeService),
        ).subscribe(async (response: AuthResponseData) => {
            if (response) {
                await this.toastControllerService.displayToast({
                    message: this.translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: response.Token ? '#009688' : '#c62828',
                });
                await this.navController.navigateForward(['/training/new-training']);
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
