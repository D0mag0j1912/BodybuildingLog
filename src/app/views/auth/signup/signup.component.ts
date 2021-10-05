import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupService } from '../../../services/auth/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { finalize, tap } from 'rxjs/operators';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { TranslateService } from '@ngx-translate/core';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

type FormData = {
    language?: string;
    weightFormat?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: {
            color: 'primary'
        }
    }]
})
export class SignupComponent implements OnInit {

    form: FormGroup;

    isLoading: boolean = false;
    isSubmitted: boolean = false;

    constructor(
        private readonly authService: AuthService,
        private readonly signupService: SignupService,
        private readonly translateService: TranslateService,
        private readonly router: Router,
        private readonly snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {

        this.form = new FormGroup({
            'language': new FormControl('en', [
                Validators.required
            ]),
            'weightFormat': new FormControl('kg', [
                Validators.required
            ]),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ],
            [AuthCustomValidators.isEmailAvailable(this.signupService)]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]),
            'confirmPassword': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ])
        }, {
            validators: AuthCustomValidators.samePasswords()
        });
    }

    onSubmit() {
        this.isSubmitted = true;
        this.isLoading = true;

        if(!this.form.valid){
            this.snackBar.open('All fields needs to be correctly filled.', null, {
                duration: 3000,
                panelClass: 'app__snackbar-error'
            });
            this.isLoading = false;
            return;
        }


        this.authService.signup(
            this._accessFormData('language').value,
            this._accessFormData('weightFormat').value,
            this._accessFormData('email').value,
            this._accessFormData('password').value,
            this._accessFormData('confirmPassword').value
        ).pipe(
            tap((response: AuthResponseData) => {
                this.snackBar.open(this.translateService.instant(response.message), null, {
                    duration: 3000,
                    panelClass: response.success ? 'app__snackbar' : 'app__snackbar-error'
                });
                if(response.success){
                    this._accessFormData('email').clearAsyncValidators();
                    this._accessFormData('email').updateValueAndValidity();
                    this.router.navigate(['/login']);
                }
            }),
            finalize(() => this.isLoading = false)
        ).subscribe();
    }

    public _accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
