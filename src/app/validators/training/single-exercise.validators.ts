import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkDuplicateExerciseName(array: FormArray): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control) {
            const exerciseName: string = (control.value as string).trim();
            for (const group of (array as FormArray).controls) {
                if ((group.get('name').value as string).trim() === exerciseName) {
                    return { 'duplicate': true };
                }
            }
            return null;
        }
        else {
            return null;
        }
    };
}
