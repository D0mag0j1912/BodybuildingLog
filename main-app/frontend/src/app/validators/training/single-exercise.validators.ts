import {
    AbstractControl,
    FormArray,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';
import { SingleExerciseFormType } from '../../models/training/new-training/single-exercise/single-exercise-form.type';

export function checkDuplicateExerciseName(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            const exerciseNames: string[] = [];
            for (const group of (array as FormArray<FormGroup<SingleExerciseFormType>>).controls) {
                if (
                    exerciseNames.indexOf(group.controls.exerciseData.controls.name?.value) !== -1
                ) {
                    return {
                        duplicateExerciseName: group.controls.exerciseData.controls.name.value,
                    };
                } else {
                    exerciseNames.push(group.controls.exerciseData.controls.name?.value);
                }
            }
            return null;
        }
        return null;
    };
}
