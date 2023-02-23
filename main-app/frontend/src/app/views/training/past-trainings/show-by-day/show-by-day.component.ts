import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDays, startOfDay, startOfWeek } from 'date-fns';
import { DayActivatedType } from '../../../../models/training/past-trainings/day-activated.type';
import { getCurrentDayIndex } from '../../../../helpers/training/show-by-day.helper';

@Component({
    selector: 'bl-show-by-day',
    templateUrl: './show-by-day.component.html',
    styleUrls: ['./show-by-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowByDayComponent implements OnChanges {
    @Input()
    startDate = startOfDay(new Date());

    @Input()
    isLoading = false;

    activeDay = 1;

    @Output()
    readonly dayActivated: EventEmitter<DayActivatedType> = new EventEmitter<DayActivatedType>();

    readonly daysOfWeek$: Observable<string[]> = this._translateService
        .stream('weekdays')
        .pipe(map((value) => Object.values(value)));

    constructor(private _translateService: TranslateService) {}

    ngOnChanges(changes: SimpleChanges): void {
        const startDate = changes?.startDate?.currentValue as Date;
        if (startDate) {
            this.activeDay = getCurrentDayIndex(startDate) + 1;
        }
    }

    onDayActivated(index: number): void {
        const dayNumber = index + 1;
        this.activeDay = dayNumber;

        const newDate = addDays(startOfWeek(this.startDate, { weekStartsOn: 1 }), index);
        this.dayActivated.next({ Date: newDate, DayNumber: index });
    }
}
