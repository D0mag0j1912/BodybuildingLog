import { forwardRef, InjectionToken, Type } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SetsComponent } from '../views/shared/training/set/set.component';
import { SingleExerciseComponent } from '../views/shared/training/single-exercise/single-exercise.component';

export type Components = SingleExerciseComponent | SetsComponent;

export function getControlValueAccessor(component: Type<Components>): ControlValueAccessorType {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => component),
        multi: true,
    };
}

type ControlValueAccessorType = {
    provide: InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: Type<Components>;
    multi: boolean;
};
