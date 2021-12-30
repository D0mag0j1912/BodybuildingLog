import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
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
export class PastTrainingsFiltersComponent implements AfterViewInit {

    @Output()
    readonly trainingEmitted: EventEmitter<Training[]> = new EventEmitter<Training[]>();

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
            this.sharedService.setLoading(true);
            this.searchInput.valueChanges.pipe(
                map((value: string) => value.trim()),
                filter((value: string) => value !== '' && value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((value: string) =>
                    this.pastTrainingsService.searchPastTrainings(value),
                ),
                takeUntil(this.unsubscribeService),
            ).subscribe(_ => this.sharedService.setLoading(false));
        }
    }

    openFilterDialog(): void {}

}
