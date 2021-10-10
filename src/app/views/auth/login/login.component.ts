import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { finalize, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as AuthCustomValidators from '../../../validators/auth/auth.validators';

type FormData = {
    email?: string;
    password?: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

    isLoading: boolean = false;

    //Definiram formu
    form: FormGroup;

    @ViewChild('emailRef')
    private readonly emailInput: ElementRef;

    constructor(
        private readonly loginService: LoginService,
        private readonly authService: AuthService,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar
    ) { }

    //Metoda koja se pokreće kada se komponenta inicijalizira
    ngOnInit(): void {

        //Inicijaliziram formu
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

    //Metoda koja se pokreće kada se klikne "Login"
    onSubmit(){
        this.isLoading = true;
        //Ako je forma neispravna
        if(!this.form.valid){
            this.snackBar.open('All fields needs to be correctly filled.', null, {
                duration: 3000,
                panelClass: 'app__snackbar-error'
            });
            this.isLoading = false;
            return;
        }

        this.authService.login(
            this._accessFormData('email').value,
            this._accessFormData('password').value
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

    public _accessFormData(formFieldName: keyof FormData): FormControl {
        return this.form.get(formFieldName) as FormControl;
    }

}
