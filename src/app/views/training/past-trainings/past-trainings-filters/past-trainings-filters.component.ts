import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { EMPTY, fromEvent } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, takeUntil } from 'rxjs/operators';
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
        fromEvent($event?.target, 'keyup')
            .pipe(
                filter((event: Event) => (event.target as HTMLInputElement)?.value !== '' && (event.target as HTMLInputElement)?.value.length <= 50),
                map((event: Event) => (event.target as HTMLInputElement)?.value.trim()),
                debounceTime(200),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value),
                ),
                catchError(_ => EMPTY),
                finalize(() => this.sharedService.setLoading(false)),
                takeUntil(this.unsubscribeService),
            )
            .subscribe((trainings: Training[]) => this.trainingEmitted.emit(trainings));
    }
}
