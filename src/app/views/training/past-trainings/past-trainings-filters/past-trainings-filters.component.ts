import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../../services/training/past-trainings.service';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent {

    constructor(
        private readonly unsubscribeService: UnsubscribeService,
        private readonly pastTrainingsService: PastTrainingsService,
    ) {}

    openFilterDialog(): void {}

    onSearch($event: Event): void {
        fromEvent($event?.target, 'keyup')
            .pipe(
                filter((event: Event) => (event.target as HTMLInputElement)?.value !== ''),
                map((event: Event) => (event.target as HTMLInputElement)?.value.trim()),
                debounceTime(150),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value),
                ),
                takeUntil(this.unsubscribeService),
            )
            .subscribe();
    }
}
