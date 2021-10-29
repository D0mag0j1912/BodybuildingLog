import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { finalize, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

type FormData = {
    email?: string;
    password?: string;
};

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {

    isLoading: boolean = false;

    form: FormGroup;

    @ViewChild('emailRef', {
        read: ElementRef
    })
    private readonly emailInput: ElementRef;

    constructor(
        private readonly loginService: LoginService,
        private readonly authService: AuthService,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar,
    ) {}

    ngOnInit(): void {

        this.form = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ])
        }, {
            asyncValidators: AuthCustomValidators.passwordFitsEmail(this.loginService)
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            (<HTMLInputElement>this.emailInput.nativeElement).focus();
        });
    }

    onSubmit(): void {
        this.isLoading = true;

        if(!this.form.valid){
            this.snackBar.open('All fields needs to be correctly filled.', null, {
                duration: 3000,
                panelClass: 'app__snackbar-error'
            });
            this.isLoading = false;
            return;
        }

        this.authService.login(
            this.accessFormData('email').value,
            this.accessFormData('password').value
        ).pipe(
            tap((response: AuthResponseData) => {
                this.snackBar.open(this.translateService.instant(response.message), null, {
                    duration: 3000,
                    panelClass: response.token ? 'app__snackbar' : 'app__snackbar-error'
                });
            }),
            finalize(() => this.isLoading = false)
        ).subscribe();
    }

    accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
