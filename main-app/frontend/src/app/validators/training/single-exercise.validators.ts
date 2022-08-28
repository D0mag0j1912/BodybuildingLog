import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SingleExerciseFormType } from '../../views/shared/training/single-exercise/single-exercise.component';

export function checkExerciseNumber(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            const exerciseNumber = (array as FormArray<FormGroup<SingleExerciseFormType>>)?.controls?.length;
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
            for (const group of (array as FormArray<FormGroup<SingleExerciseFormType>>).controls) {
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
