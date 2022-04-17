import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDays, differenceInDays, startOfDay, startOfWeek } from 'date-fns';

export interface DayActivatedType {
    Date: Date;
    DayNumber: number;
}

@Component({
    selector: 'bl-show-by-day',
    templateUrl: './show-by-day.component.html',
    styleUrls: ['./show-by-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowByDayComponent implements OnChanges {

    @Input()
    startDate: Date = startOfDay(new Date());

    @Output()
    readonly dayActivated: EventEmitter<DayActivatedType> = new EventEmitter<DayActivatedType>();

    readonly activeDay$$: BehaviorSubject<number> = new BehaviorSubject(1);
    readonly daysOfWeek$: Observable<string[]> = this.translateService.stream('weekdays')
        .pipe(
            map(value => Object.values(value)),
        );

    constructor(
        private readonly translateService: TranslateService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        const startDate = changes?.startDate?.currentValue;
        if (startDate) {
            const startOfWeekDate = startOfWeek(startDate, { weekStartsOn: 1 });
            const currentDayIndex = differenceInDays(startDate, startOfWeekDate);
            this.activeDay$$.next(currentDayIndex + 1);
            this.dayActivated.next({ Date: startOfWeekDate, DayNumber: currentDayIndex });
        }
    }

    makeDayActive(index: number): void {
        const dayNumber = index + 1;
        this.activeDay$$.next(dayNumber);

        const newDate = addDays(startOfWeek(this.startDate, { weekStartsOn: 1 }), index);
        this.dayActivated.next({ Date: newDate, DayNumber: index });
    }

}
