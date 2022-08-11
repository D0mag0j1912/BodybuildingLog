import { AbstractControl, UntypedFormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

//TODO: create no empty training validator (exercises.length === 0)
export function checkExerciseNumber(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            const exerciseNumber = (array as UntypedFormArray)?.controls?.length;
            if (exerciseNumber) {
                return null;
            }
            return { 'emptyTraining': true };
        }
        return null;
    };
}

export function checkDuplicateExerciseName(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            const exerciseNames: string[] = [];
            for (const group of (array as UntypedFormArray).controls) {
                if (exerciseNames.indexOf(group.get('exerciseData.name')?.value) !== -1) {
                    return { 'duplicateExerciseName': group.get('exerciseData.name').value };
                }
                else {
                    exerciseNames.push(group.get('exerciseData.name')?.value);
                }
            }
            return null;
        }
        return null;
    };
}
