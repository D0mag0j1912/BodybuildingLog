import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DayOfWeek } from '../../../models/common/day-of-week.type';

@Component({
    selector: 'bl-day-of-week',
    templateUrl: './day-of-week.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DayOfWeekComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayOfWeekComponent implements ControlValueAccessor {
    dayOfWeek: DayOfWeek = 'Monday';

    onChange: (dayOfWeek: DayOfWeek) => void;
    onTouched: () => void;

    writeValue(dayOfWeek: DayOfWeek): void {
        this.dayOfWeek = dayOfWeek;
    }

    registerOnChange(fn: (dayOfWeek: DayOfWeek) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onDayClicked(): void {
        this.onChange(this.dayOfWeek);
    }
}
