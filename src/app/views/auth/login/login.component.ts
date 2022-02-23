import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { SNACK_BAR_DURATION } from '../../../constants/snack-bar-duration.const';
import { FormErrorStateMatcher } from '../../../helpers/error-matchers/form-error-state-matcher.helper';
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
    formErrorStateMatcher: FormErrorStateMatcher = new FormErrorStateMatcher();

    @ViewChild('emailRef', {
        read: ElementRef,
    })
    private readonly emailInput: ElementRef;

    constructor(
        private readonly translateService: TranslateService,
        private readonly loginService: LoginService,
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly snackBar: MatSnackBar,
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

    ngAfterViewInit(): void {
        setTimeout(() => (<HTMLInputElement>this.emailInput.nativeElement).focus());
    }

    onSubmit(): void {
        if (!this.form.valid) {
            this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
                duration: SNACK_BAR_DURATION.ERROR,
                panelClass: 'app__snackbar-error',
            });
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
        ).subscribe((response: AuthResponseData) => {
            if (response) {
                this.snackBar.open(this.translateService.instant(response.Message as string), null, {
                    duration: SNACK_BAR_DURATION.GENERAL,
                    panelClass: response.Token ? 'app__snackbar' : 'app__snackbar-error',
                });
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
