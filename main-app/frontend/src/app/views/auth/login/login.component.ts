import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { AuthService } from '../../../services/api/auth/auth.service';
import { LoginService } from '../../../services/api/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';
import { IonFocusDurations } from '../../../constants/shared/ion-focus-durations.const';
import { LoadingControllerService } from '../../../services/shared/loading-controller.service';

@Component({
    selector: 'bl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    isLoading = false;

    focusDuration = IonFocusDurations.LOGIN;
    form = new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20),
            ]),
        },
        {
            asyncValidators: AuthCustomValidators.passwordFitsEmail(
                this._loginService,
                this._changeDetectorRef,
            ),
        },
    );

    constructor(
        private _loginService: LoginService,
        private _authService: AuthService,
        private _loadingControllerService: LoadingControllerService,
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {}

    async onSubmit(): Promise<void> {
        if (!this.form.valid) {
            return;
        }
        this.isLoading = true;
        await this._loadingControllerService.displayLoader({ message: 'auth.logging_in' });

        this._authService
            .login(this.form.controls.email.value, this.form.controls.password.value)
            .pipe(
                catchError((_) => EMPTY),
                finalize(async () => {
                    this.isLoading = false;
                    await this._loadingControllerService.dismissLoader();
                }),
            )
            .subscribe(async (response: AuthResponseData) => {
                if (response) {
                    await this._router.navigate(['/training/tabs/new-training']);
                }
            });
    }
}
