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
import { ActivatedRoute } from '@angular/router';
import { IonInput, SegmentChangeEventDetail } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/shared/input-maxlength.const';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PeriodFilterType } from '../../../../models/training/past-trainings/past-trainings.model';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent implements AfterViewInit {
    private readonly keyUp$$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

    @Input()
    periodFilter = 'week';

    @Input()
    periodDisabled = false;

    @Output()
    readonly trainingEmitted: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    readonly periodEmitted: EventEmitter<PeriodFilterType> = new EventEmitter<PeriodFilterType>();

    @Output()
    readonly searchEmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

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
        const searchQueryParam = this._route.snapshot.queryParamMap?.get('search');
        if (searchQueryParam) {
            this.searchValue = searchQueryParam;
        }

        this.keyUp$$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value?.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((value: string) => this.trainingEmitted.next(value));
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.searchEl) {
                const value = this.searchEl?.value;
                this.searchEmitted.emit(!!value);
            }
        });
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this.keyUp$$.next($event);
    }

    segmentChanged($event: CustomEvent<SegmentChangeEventDetail>): void {
        this.periodEmitted.emit($event?.detail?.value as PeriodFilterType);
    }

    openFilterDialog(): void {
        //TODO
    }
}
