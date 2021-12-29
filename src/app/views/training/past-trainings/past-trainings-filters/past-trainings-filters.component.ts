import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { Training } from '../../../../models/training/new-training/new-training.model';
import { SharedService } from '../../../../services/shared/shared.service';
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

    @Output()
    readonly trainingEmitted: EventEmitter<Training[]> = new EventEmitter<Training[]>();

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {}

    openFilterDialog(): void {}

    onSearch($event: Event): void {
        this.sharedService.setLoading(true);
        //TODO: fix going to backend
        fromEvent($event?.target, 'keyup')
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement)?.value),
                map((value: string) => value.trim()),
                filter((value: string) => value !== '' && value.length <= 50),
                debounceTime(1000),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value),
                ),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(_ => this.sharedService.setLoading(false));
    }
}
