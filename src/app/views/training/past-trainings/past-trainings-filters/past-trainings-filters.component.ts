import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/input-maxlength.const';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PastTrainingsFilterType } from '../../../../models/training/past-trainings/past-trainings.model';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent {

    private readonly keyUp$$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

    @Output()
    readonly trainingEmitted: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    readonly periodEmitted: EventEmitter<PastTrainingsFilterType> = new EventEmitter<PastTrainingsFilterType>();

    searchValue = '';

    sortOptions: [KeyValue<PastTrainingsFilterType, Observable<string>>, KeyValue<PastTrainingsFilterType, Observable<string>>] = [
        {
            key: 'week',
            value: this.translateService.stream('training.past_trainings.show_by_week'),
        }, {
            key: 'day',
            value: this.translateService.stream('training.past_trainings.show_by_day'),
        },
    ];

    constructor(
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly route: ActivatedRoute,
    ) {
        const searchQueryParam = this.route.snapshot.queryParamMap?.get('search');
        if (searchQueryParam) {
            this.searchValue = searchQueryParam;
        }

        this.keyUp$$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this.unsubscribeService),
            )
            .subscribe((value: string) => this.trainingEmitted.next(value));

    }

    get inputMaxLength(): number {
        return INPUT_MAX_LENGTH;
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this.keyUp$$.next($event);
    }

    segmentChanged($event: CustomEvent<SegmentChangeEventDetail>): void {
        //TODO: create logic for sorting trainings by period
        this.periodEmitted.emit($event?.detail?.value as PastTrainingsFilterType);
    }

    openFilterDialog(): void {
        //TODO
    }

}
