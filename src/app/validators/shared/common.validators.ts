import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            if (!isNaN(parseFloat(control.value)) && isFinite(control.value)) {
                return null;
            }
            return { 'onlyNumbers': true };
        }
        return null;
    };
}
