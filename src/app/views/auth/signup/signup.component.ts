import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { SNACK_BAR_DURATION } from '../../../constants/snack-bar-duration.const';
import { Language } from '../../../models/preferences.model';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupService } from '../../../services/auth/signup.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

type FormData = {
    language?: Language;
    weightFormat?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: {
            color: 'primary',
        },
    }],
})
export class SignupComponent {

    form: FormGroup;

    isLoading: boolean = false;

    constructor(
        private readonly authService: AuthService,
        private readonly signupService: SignupService,
        private readonly translateService: TranslateService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly snackBar: MatSnackBar,
        private readonly router: Router,
    ) {
        this.form = new FormGroup({
            'language': new FormControl('en', [Validators.required]),
            'weightFormat': new FormControl('kg', [Validators.required]),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email],
                [AuthCustomValidators.isEmailAvailable(
                    this.signupService,
                    this.changeDetectorRef,
                )],
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

    onSubmit(): void {
        if(!this.form.valid){
            this.snackBar.open(this.translateService.instant('auth.errors.invalid_form'), null, {
                duration: SNACK_BAR_DURATION.ERROR,
                panelClass: 'app__snackbar-error',
            });
            return;
        }
        this.isLoading = true;

        this.authService.signup(
            this.accessFormData('language').value as Language,
            this.accessFormData('weightFormat').value as string,
            this.accessFormData('email').value as string,
            this.accessFormData('password').value as string,
            this.accessFormData('confirmPassword').value as string,
        ).pipe(
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe(async (response: AuthResponseData) => {
            if(response.success){
                this.snackBar.open(this.translateService.instant(response.message as string), null, {
                    duration: SNACK_BAR_DURATION.GENERAL,
                    panelClass: response.success ? 'app__snackbar' : 'app__snackbar-error',
                });
                await this.router.navigate(['/login']);
            }
        });
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
