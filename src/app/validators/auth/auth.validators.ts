import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { of, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { SignupService } from "src/app/services/auth/signup.service";
import { LoginService } from "../../services/auth/login.service";

//Funkcija koja provjerava je li unesena lozinka odgovara unesenom emailu
export function passwordFitsEmail(loginService: LoginService): AsyncValidatorFn {
    return (group: AbstractControl) => {
        return timer(350).pipe(
            switchMap(() => {
                let email: string = group.get('email')?.value;
                let password: string = group.get('password')?.value;
                //Ako lozinka ILI email nisu upisani
                if(!email || !password){
                    return of(null);
                }
                return loginService.passwordFitsEmail(email, password).pipe(
                    map(response => {
                        //Ako je server vratio neuspješnu poruku
                        if(!response){
                            return {'passwordFitsEmail': true};
                        }
                        return null;
                    })
                );
            })
        );
    }
}

//Funkcija koja provjerava je li upisani email slobodan
export function isEmailAvailable(signupService: SignupService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return timer(350).pipe(
            switchMap(() => {
                //Ako email nije upisan
                if(!control.value){
                    return of(null);
                }
                //Ako je email upisan
                else{
                    return signupService.getEmails(control.value).pipe(
                        map(response => {
                            //Ako je server vratio da email ne postoji u bazi
                            if(response){
                                return null;
                            }
                            //Ako je server vratio da email već postoji u bazi podataka
                            return {'availableEmail': true};
                        })
                    );
                }
            })
        );
    }
}

//Funkcija koja provjerava jesu li obje lozinke iste
export function samePasswords(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
        let password = group.get('password')?.value;
        let confirmPassword = group.get('confirmPassword')?.value;
        //Ako barem jedna od njih nije upisana
        if(!password || !confirmPassword){
            return null;
        }
        //Ako su oba dvije upisane
        else{
            //Ako lozinka NIJE jednaka repeatu
            if(password !== confirmPassword){
                return {
                    'equalPass': true
                };
            }
            else{
                return null;
            }
        }
    }
}


