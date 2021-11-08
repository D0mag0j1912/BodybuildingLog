import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SignupService } from 'src/app/services/auth/signup.service';
import { LoginService } from '../../services/auth/login.service';

export function passwordFitsEmail(loginService: LoginService): AsyncValidatorFn {
    return (group: AbstractControl) =>
        timer(350).pipe(
            switchMap(() => {
                const email: string = group.get('email')?.value;
                const password: string = group.get('password')?.value;
                if(!email || !password){
                    return of(null);
                }
                return loginService.passwordFitsEmail(email, password).pipe(
                    map((response: boolean) => {
                        if(!response){
                            return { 'passwordFitsEmail': true };
                        }
                        return null;
                    }),
                );
            }),
        );
}

export function isEmailAvailable(signupService: SignupService): AsyncValidatorFn {
    return (control: AbstractControl) =>
        timer(350).pipe(
            switchMap(() => {
                if(!control.value){
                    return of(null);
                }
                else{
                    return signupService.getEmails(control.value).pipe(
                        map((response: boolean) => {
                            if(response){
                                return null;
                            }
                            return { 'availableEmail': true };
                        }),
                    );
                }
            }),
        );
}

export function samePasswords(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
        const password: string = group.get('password')?.value;
        const confirmPassword: string = group.get('confirmPassword')?.value;
        if(!password || !confirmPassword){
            return null;
        }
        else{
            if(password !== confirmPassword){
                return { 'equalPass': true };
            }
            else{
                return null;
            }
        }
    };
}
