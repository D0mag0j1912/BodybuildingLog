import { ChangeDetectorRef } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EMPTY, of, timer } from 'rxjs';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { SignupService } from '../../services/api/auth/signup.service';
import { LoginService } from '../../services/api/auth/login.service';

export function passwordFitsEmail(
    loginService: LoginService,
    changeDetectorRef: ChangeDetectorRef,
): AsyncValidatorFn {
    return (group: AbstractControl) =>
        timer(350).pipe(
            switchMap((_) => {
                if (group) {
                    const email: string = group.get('email')?.value;
                    const password: string = group.get('password')?.value;
                    if (!email || !password) {
                        return of(null);
                    }
                    return loginService.passwordFitsEmail(email, password).pipe(
                        map((response: boolean) => {
                            if (!response) {
                                return { passwordFitsEmail: true };
                            }
                            return null;
                        }),
                        catchError((_) => of(null)),
                        finalize(() => changeDetectorRef.markForCheck()),
                    );
                } else {
                    return of(null);
                }
            }),
        );
}

export function isEmailAvailable(
    signupService: SignupService,
    cd: ChangeDetectorRef,
): AsyncValidatorFn {
    return (control: AbstractControl) =>
        timer(350).pipe(
            switchMap((_) => {
                if (control) {
                    const email: string = control?.value;
                    if (!email) {
                        return EMPTY;
                    }
                    return signupService.getEmails(email.trim().toLowerCase()).pipe(
                        map((response: boolean) => {
                            if (!response) {
                                return { availableEmail: true };
                            }
                            return null;
                        }),
                        catchError((_) => EMPTY),
                        finalize(() => cd.markForCheck()),
                    );
                } else {
                    return EMPTY;
                }
            }),
        );
}

export function samePasswords(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
        if (group) {
            const password: string = group.get('password')?.value;
            const confirmPassword: string = group.get('confirmPassword')?.value;
            if (!password || !confirmPassword) {
                return null;
            } else {
                if (password !== confirmPassword) {
                    return { equalPass: true };
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    };
}
