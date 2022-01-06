import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PastTrainingsResponse } from '../../../../models/training/past-trainings/past-trainings.model';
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
export class PastTrainingsFiltersComponent implements AfterViewInit {

    @Output()
    readonly trainingEmitted: EventEmitter<PastTrainingsResponse> = new EventEmitter<PastTrainingsResponse>();

    @ViewChild('search', {
        read: NgModel,
    })
    searchInput: NgModel;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly sharedService: SharedService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {}

    ngAfterViewInit(): void {
        if (this.searchInput) {
            this.searchInput.valueChanges.pipe(
                map((value: string) => value.trim()),
                filter((value: string) => value !== '' && value.length <= 50),
                tap(_ => this.sharedService.setLoading(true)),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value).pipe(
                        catchError(_ => EMPTY),
                    ),
                ),
                takeUntil(this.unsubscribeService),
            ).subscribe((response: PastTrainingsResponse) => {
                this.trainingEmitted.emit(response);
                this.sharedService.setLoading(false);
            });
        }
    }

    openFilterDialog(): void {}

}
