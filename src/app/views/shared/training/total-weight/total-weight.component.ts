import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';

@Component({
    selector: 'bl-total-weight',
    templateUrl: './total-weight.component.html',
    styleUrls: ['./total-weight.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(TotalWeightComponent)],
})
export class TotalWeightComponent implements ControlValueAccessor {

    value: string;

    @Input()
    isLoading = false;

    onChange: () => void;
    onTouched: () => void;

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    writeValue(value: string): void {
        this.value = value;
        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

}
