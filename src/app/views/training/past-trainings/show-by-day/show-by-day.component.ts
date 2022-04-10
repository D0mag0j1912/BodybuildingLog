import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDays } from 'date-fns';

@Component({
    selector: 'bl-show-by-day',
    templateUrl: './show-by-day.component.html',
    styleUrls: ['./show-by-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowByDayComponent {

    @Input()
    startOfWeek: Date = new Date();

    @Output()
    readonly dayActivated: EventEmitter<Date> = new EventEmitter<Date>();

    readonly activeDay$$: BehaviorSubject<number> = new BehaviorSubject(1);
    readonly daysOfWeek$: Observable<string[]> = this.translateService.stream('weekdays')
        .pipe(
            map(value => Object.values(value)),
        );

    constructor(
        private readonly translateService: TranslateService,
    ) { }

    makeDayActive(index: number): void {
        const dayNumber = index + 1;
        this.activeDay$$.next(dayNumber);

        const newDate = addDays(this.startOfWeek, index);
        this.dayActivated.next(newDate);
    }

}
