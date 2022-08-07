import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function allSetsFilled(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            let isSetFilled = true;
            (array as FormArray).controls.forEach((set: AbstractControl) => {
                if (!set.get('weightLifted').value || !set.get('reps').value ||
                    set.get('weightLifted').errors || set.get('reps').errors) {
                    isSetFilled = false;
                }
            });
            if (isSetFilled) {
                return null;
            }
            return { 'setNotFilled': true };
        }
        return null;
    };
}
