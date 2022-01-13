import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/input-maxlength.const';
import { SearchQuery } from '../../../../models/common/interfaces/common.model';
import { TrainingData } from '../../../../models/common/interfaces/common.model';
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

    private readonly keyUp$$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

    @Output()
    readonly trainingEmitted: EventEmitter<SearchQuery<TrainingData<PastTrainingsResponse>>> = new EventEmitter<SearchQuery<TrainingData<PastTrainingsResponse>>>();

    searchValue: string = '';

    @ViewChild('search', {
        read: ElementRef,
    })
    searchInput: ElementRef | undefined;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly route: ActivatedRoute,
    ) {
        const searchQueryParam = this.route.snapshot.queryParamMap?.get('search');
        if (searchQueryParam) {
            this.searchValue = searchQueryParam;
        }

        this.keyUp$$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value.trim()),
                filter((value: string) => value.length <= 50),
                debounceTime(750),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value).pipe(
                        catchError(_ => EMPTY),
                    ),
                ),
                takeUntil(this.unsubscribeService),
            )
            .subscribe((response: TrainingData<PastTrainingsResponse>) => {
                this.trainingEmitted.emit({
                    data: {
                        IsLoading: response.IsLoading,
                        IsError: response.IsError,
                        Value: response?.Value,
                    } as TrainingData<PastTrainingsResponse>,
                    searchValue: this.searchValue.trim(),
                });
            });
    }

    get inputMaxLength(): number {
        return INPUT_MAX_LENGTH;
    }

    ngAfterViewInit(): void {
        setTimeout(() => (this.searchInput.nativeElement as HTMLInputElement).focus());
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this.keyUp$$.next($event);
    }

    //TODO: open filter dialog
    openFilterDialog(): void {}

}
