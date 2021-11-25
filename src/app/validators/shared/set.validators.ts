import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function allSetsFilled(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
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

export function isFirstSetValid(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            let isSet: boolean = false;
            (array as FormArray).controls.forEach((set: AbstractControl) => {
                if (set.get('weightLifted').value && set.get('weightLifted').valid
                    && set.get('reps').value && set.get('reps').valid) {
                    isSet = true;
                }
            });
            if(isSet){
                return null;
            }
            return { 'firstSetInvalid': true };
        }
        return null;
    };
}

export function bothValuesRequired(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
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
