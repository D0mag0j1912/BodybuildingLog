import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class SingleExerciseErrorHelper implements ErrorStateMatcher {

    isErrorState(
        control: FormControl,
        form: FormGroupDirective | NgForm,
    ): boolean {
        return form?.errors?.duplicateExerciseName;
    }
}
