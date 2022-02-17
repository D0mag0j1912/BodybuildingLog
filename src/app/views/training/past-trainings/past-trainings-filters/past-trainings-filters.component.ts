import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { INPUT_MAX_LENGTH } from '../../../../constants/input-maxlength.const';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';

interface PeriodDropdown {
    key: string;
    value: Observable<string>;
}

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
    readonly trainingEmitted: EventEmitter<string> = new EventEmitter<string>();

    searchValue = '';

    @ViewChild('search', { read: ElementRef })
    searchInput: ElementRef | undefined;

    sortOptions: [PeriodDropdown, PeriodDropdown] = [
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

    ngAfterViewInit(): void {
        setTimeout(() => (this.searchInput.nativeElement as HTMLInputElement).focus());
    }

    emitKeyboardEvent($event: KeyboardEvent): void {
        this.keyUp$$.next($event);
    }

    openFilterDialog(): void {
        //TODO
    }

}
