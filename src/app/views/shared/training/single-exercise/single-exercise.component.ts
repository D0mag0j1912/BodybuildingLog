import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';

const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SingleExerciseComponent),
    multi: true,
};

@Component({
    selector: 'app-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CONTROL_VALUE_ACCESSOR],
})
export class SingleExerciseComponent implements ControlValueAccessor {

    form: FormArray = new FormArray([]);

    onChange: () => void;
    onTouched: () => void;

    writeValue(exercises: SingleExercise[]): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: () => void): void {
        throw new Error('Method not implemented.');
    }

}
