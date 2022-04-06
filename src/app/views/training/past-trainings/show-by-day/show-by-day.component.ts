import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DAYS_OF_WEEK } from '../../../../constants/days-of-week.const';
import { PeriodDropdown } from '../../../../models/training/past-trainings/past-trainings.model';

@Component({
    selector: 'bl-show-by-day',
    templateUrl: './show-by-day.component.html',
    styleUrls: ['./show-by-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowByDayComponent {

    @Input()
    period: PeriodDropdown = 'week';

    get daysOfWeek(): string[] {
        return DAYS_OF_WEEK.map(day => day[0]);
    }
}
