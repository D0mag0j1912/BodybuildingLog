import { AbstractControl, FormArray, ValidatorFn } from "@angular/forms";

export function allSetsFilled(): ValidatorFn {
    return (group: AbstractControl): {[key: string]: boolean} | null => {
        if(group){
            let isSetFilled: boolean = true;
            (<FormArray>group.get('sets')).controls.forEach((set: AbstractControl) => {
                if(!set.get('weightLifted').value || !set.get('reps').value
                    || set.get('weightLifted').errors || set.get('reps').errors){
                    isSetFilled = false;
                }
            });
            if(isSetFilled){
                return null;
            }
            return {'setNotFilled': true};
        }
        return null;
    }
}

export function atLeastOneSet(): ValidatorFn {
    return (group: AbstractControl): {[key: string]: boolean} | null => {
        if(group){
            let isSet: boolean = false;
            (<FormArray>group.get('sets')).controls.forEach((set: AbstractControl) => {
                if(set.get('weightLifted').value && set.get('reps').value){
                    isSet = true;
                }
            });
            if(isSet){
                return null;
            }
            return {'atLeastOneSet': true};
        }
        return null;
    }
}


//Validator koji osigurava da i 'weightLifted' i 'reps' moraju biti uneseni, ako se unese jedno od to dvoje
export function bothValuesRequired(): ValidatorFn {
    return (group: AbstractControl): {[key: string]: boolean} | null => {
        if(group){
            if(group.get('weightLifted').value && !group.get('reps').value){
                return {'repsRequired': true};
            }
            else if(!group.get('weightLifted').value && group.get('reps').value){
                return {'weightLiftedRequired': true};
            }
            else {
                return null;
            }
        }
        return null;
    }
}

//Funkcija koja provjerava je li unesen pozitivan broj
export function isPositiveNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        //Ako postoji neka upisana vrijednost
        if(control.value){
            //Ako ta vrijednost nije pozitivna
            if(+control.value < 0){
                return {'onlyPositiveNumbers': true};
            }
            return null;
        }
        return null;
    }
}

//Funkcija koja provjerava je li unesen broj
export function isBroj(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        //Ako postoji neka upisana vrijednost
        if(control.value){
            if(!isNaN(parseFloat(control.value)) && isFinite(control.value)){
                return null;
            }
            return {'samoBrojevi': true};
        }
        return null;
    }
}

