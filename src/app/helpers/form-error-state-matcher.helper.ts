import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class FormErrorStateMatcher implements ErrorStateMatcher {

    isErrorState(
        control: FormControl,
        form: FormGroupDirective | NgForm,
    ): boolean {
        const isSubmitted: boolean = form && form.submitted;
        const controlTouched: boolean = control && (control.dirty || control.touched);
        const controlInvalid: boolean = control && control.invalid;
        const parentInvalid: boolean = control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched);
        return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
    }
}
