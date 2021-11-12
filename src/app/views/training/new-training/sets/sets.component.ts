import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SetStateChanged } from '../../../../models/training/new-training/new-training.model';

@Component({
    selector: 'app-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SetsComponent),
            multi: true,
        },
    ],
})
export class SetsComponent implements ControlValueAccessor {

    onChange: () => void;
    onTouched: () => void;
    disabled: boolean = false;

    constructor(
        private readonly translateService: TranslateService,
    ){}

    writeValue(setFormGroup: FormGroup): void {}

    registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
