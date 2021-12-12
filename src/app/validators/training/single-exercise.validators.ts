import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkDuplicateExerciseName(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            const exerciseNames: string[] = [];
            for (const group of (array as FormArray).controls) {
                if (exerciseNames.indexOf(group.get('name')?.value) !== -1) {
                    return { 'duplicateExerciseName': group.get('name').value };
                }
                else {
                    exerciseNames.push(group.get('name')?.value);
                }
            }
            return null;
        }
        else {
            return null;
        }
    };
}
