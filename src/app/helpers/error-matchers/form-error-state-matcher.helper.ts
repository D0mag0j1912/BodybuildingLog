import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class FormErrorStateMatcher implements ErrorStateMatcher {

    isErrorState(
        control: FormControl,
        _form: FormGroupDirective | NgForm,
    ): boolean {
        const controlTouched: boolean = control && (control.dirty || control.touched);
        const parentInvalid: boolean = control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched);
        return parentInvalid && controlTouched;
    }
}
