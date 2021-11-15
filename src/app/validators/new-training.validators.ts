import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

export function allSetsFilled(): ValidatorFn {
    return (array: AbstractControl): {[key: string]: boolean} | null => {
        if(array){
            let isSetFilled: boolean = true;
            (array as FormArray).controls.forEach((set: AbstractControl) => {
                if(!set.get('weightLifted').value || !set.get('reps').value
                    || set.get('weightLifted').errors || set.get('reps').errors){
                    isSetFilled = false;
                }
            });
            if(isSetFilled){
                return null;
            }
            return { 'setNotFilled': true };
        }
        return null;
    };
}

export function atLeastOneSet(): ValidatorFn {
    return (array: AbstractControl): {[key: string]: boolean} | null => {
        if(array){
            let isSet: boolean = false;
            (array as FormArray).controls.forEach((set: AbstractControl) => {
                if(set.get('weightLifted').value && set.get('reps').value){
                    isSet = true;
                }
            });
            if(isSet){
                return null;
            }
            return { 'atLeastOneSet': true };
        }
        return null;
    };
}

export function bothValuesRequired(): ValidatorFn {
    return (group: AbstractControl): {[key: string]: boolean} | null => {
        if(group){
            if(group.get('weightLifted').value && !group.get('reps').value){
                return { 'repsRequired': true };
            }
            else if(!group.get('weightLifted').value && group.get('reps').value){
                return { 'weightLiftedRequired': true };
            }
            else {
                return null;
            }
        }
        return null;
    };
}

export function isBroj(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        if(control.value){
            if(!isNaN(parseFloat(control.value)) && isFinite(control.value)){
                return null;
            }
            return { 'onlyNumbers': true };
        }
        return null;
    };
}
