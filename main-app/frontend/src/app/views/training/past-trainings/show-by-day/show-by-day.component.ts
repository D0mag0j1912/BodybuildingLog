import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
        const startDate = changes?.startDate?.currentValue as Date;
        if (startDate) {
            this.activeDay$$.next(getCurrentDayIndex(startDate) + 1);
        }
    }

    onDayActivated(index: number): void {
        const dayNumber = index + 1;
        this.activeDay$$.next(dayNumber);

        const newDate = addDays(startOfWeek(this.startDate, { weekStartsOn: 1 }), index);
        this.dayActivated.next({ Date: newDate, DayNumber: index });
    }

}
