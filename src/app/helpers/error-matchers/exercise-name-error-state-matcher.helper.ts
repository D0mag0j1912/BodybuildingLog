import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ExerciseNameErrorHelper implements ErrorStateMatcher {

    isErrorState(
        control: FormControl,
        form: FormGroupDirective | NgForm,
    ): boolean {
        const isSubmitted = form?.submitted;
        return (form?.invalid && isSubmitted) ||
            (control?.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
