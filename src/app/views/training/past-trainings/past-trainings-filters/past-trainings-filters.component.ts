import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { SearchQuery } from '../../../../models/common.model';
import { PastTrainingsResponse } from '../../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../../services/training/past-trainings.service';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent implements AfterViewInit {

    @Output()
    readonly trainingEmitted: EventEmitter<SearchQuery<PastTrainingsResponse>> = new EventEmitter<SearchQuery<PastTrainingsResponse>>();

    @ViewChild('search', {
        read: NgModel,
    })
    searchInput: NgModel | undefined;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {}

    ngAfterViewInit(): void {
        if (this.searchInput) {
            this.searchInput.valueChanges.pipe(
                map((value: string) => value.trim()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value).pipe(
                        catchError(_ => EMPTY),
                    ),
                ),
                takeUntil(this.unsubscribeService),
            ).subscribe((response: PastTrainingsResponse) => {
                this.trainingEmitted.emit({
                    data: response,
                    searchValue: (this.searchInput.value as string).trim(),
                });
            });
        }
    }

    //TODO: open filter dialog
    openFilterDialog(): void {}

}
