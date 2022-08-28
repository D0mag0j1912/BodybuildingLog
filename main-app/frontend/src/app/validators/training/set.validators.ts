import {
    AbstractControl,
    FormArray,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';
import { SetFormType } from '../../views/shared/training/sets/sets.component';

export function allSetsFilled(): ValidatorFn {
    return (array: AbstractControl): ValidationErrors | null => {
        if (array) {
            let isSetFilled = true;
            (array as FormArray<FormGroup<SetFormType>>).controls.forEach(
                (set: AbstractControl) => {
                    if (
                        !set.get('weightLifted').value ||
                        !set.get('reps').value ||
                        set.get('weightLifted').errors ||
                        set.get('reps').errors
                    ) {
                        isSetFilled = false;
                    }
                },
            );
            if (isSetFilled) {
                return null;
            }
            return { setNotFilled: true };
        }
        return null;
    };
}
