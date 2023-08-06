import { KeyValue } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IonInput, SegmentChangeEventDetail } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/shared/input-maxlength.const';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import {
    PastTrainingsQueryParams,
    PeriodFilterType,
} from '../../../../models/training/past-trainings/past-trainings.model';
import { decodeFilter } from '../../../../helpers/encode-decode.helper';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent implements AfterViewInit {
    private _keyUp$ = new Subject<KeyboardEvent>();

    @Input()
    periodFilter = 'week';

    @Input()
    periodDisabled = false;

    @Output()
    periodEmitted = new EventEmitter<PeriodFilterType>();

    @Output()
    searchEmitted = new EventEmitter<string>();

    @Output()
    filterDialogOpened = new EventEmitter<void>();

    @ViewChild('search', { read: IonInput })
    searchEl: IonInput;

    searchValue = '';
    inputMaxLength = INPUT_MAX_LENGTH;

    sortOptions: [
        KeyValue<PeriodFilterType, Observable<string>>,
        KeyValue<PeriodFilterType, Observable<string>>,
    ] = [
        {
            key: 'week',
            value: this._translateService.stream('training.past_trainings.show_by_week'),
        },
        {
            key: 'day',
            value: this._translateService.stream('training.past_trainings.show_by_day'),
        },
    ];

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _translateService: TranslateService,
        private _route: ActivatedRoute,
    ) {
        this._keyUp$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value?.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((value: string) => this.searchEmitted.next(value));

        this._route.queryParams
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((params: Params) => {
                const currentQueryParams = params.filter;
                const pastTrainingsQueryParams =
                    decodeFilter<PastTrainingsQueryParams>(currentQueryParams);
                this.searchValue = pastTrainingsQueryParams.search;
            });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.searchEl) {
                const value = this.searchEl?.value as string;
                this.searchEmitted.emit(value);
            }
        });
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this._keyUp$.next($event);
    }

    segmentChanged($event: CustomEvent<SegmentChangeEventDetail>): void {
        this.periodEmitted.emit($event?.detail?.value as PeriodFilterType);
    }

    openFilterDialog(): void {
        this.filterDialogOpened.emit();
    }
}
