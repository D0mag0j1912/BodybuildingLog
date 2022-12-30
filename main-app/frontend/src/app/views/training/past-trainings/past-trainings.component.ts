import { DatePipe } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
    add,
    addDays,
    format,
    getMonth,
    isSameDay,
    isSameMonth,
    isSameWeek,
    startOfDay,
    startOfWeek,
    subDays,
} from 'date-fns';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { SharedStoreService } from '../../../services/store/shared/shared-store.service';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator, PaginatorChanged } from '../../../models/common/paginator.model';
import {
    DateInterval,
    PastTrainingsQueryParams,
    PastTrainings,
    PeriodFilterType,
} from '../../../models/training/past-trainings/past-trainings.model';
import {
    QUERY_PARAMS_DATE_FORMAT,
    TEMPLATE_DATE_FORMAT,
} from '../../../constants/training/past-trainings-date-format.const';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/api/training/past-trainings.service';
import { Page } from '../../../models/common/page.type';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PreferencesService } from '../../../services/shared/preferences.service';
import {
    calculateFirstWeekDay,
    calculateLastWeekDay,
    getCurrentDayIndex,
} from '../../../helpers/training/show-by-day.helper';
import { DayActivatedType } from '../../../models/training/past-trainings/day-activated.type';
import { INITIAL_PAGE, DEFAULT_SIZE } from '../../../constants/shared/paginator.const';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { TrainingItemWrapperHeights } from '../../../constants/enums/training-item-wrapper-heights.enum';
import { NewTraining } from '../../../models/training/new-training/new-training.model';

@Component({
    selector: 'bl-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent implements AfterViewChecked, OnDestroy {
    private _isSearch$ = new BehaviorSubject<boolean>(false);

    readonly isSearch$ = this._isSearch$.asObservable();
    pastTrainings$: Observable<StreamData<Paginator<PastTrainings>>> | undefined = undefined;

    readonly pageSizeOptions = [1, 3, 5, 10];
    size = DEFAULT_SIZE;
    page = INITIAL_PAGE;

    searchText = '';
    currentQueryParams: PastTrainingsQueryParams;
    periodFilter = this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
    dayActivated: DayActivatedType = {
        Date: startOfDay(new Date()),
        DayNumber: 0,
    };
    showByDayStartDate: Date;
    dateFormat = TEMPLATE_DATE_FORMAT;

    isNextPage = false;
    isPreviousPage = false;

    @ViewChild('itemWrapper', { read: ElementRef })
    trainingItemWrapper: ElementRef | undefined;

    @ViewChild('timePeriod', { read: ElementRef })
    set timePeriodEl(timePeriodElement: ElementRef) {
        if (timePeriodElement) {
            const trainingElement = this.trainingItemWrapper?.nativeElement as HTMLDivElement;
            if (trainingElement) {
                this._isSearch$
                    .pipe(delay(0), takeUntil(this._unsubscribeService))
                    .subscribe(
                        (isSearch) =>
                            (trainingElement.style.maxHeight = `calc(100vh - ${
                                isSearch
                                    ? TrainingItemWrapperHeights.SEARCH_HEIGHT
                                    : TrainingItemWrapperHeights.WEEK_HEIGHT
                            }px)`),
                    );
            }
        }
    }

    constructor(
        private _pastTrainingsService: PastTrainingsService,
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _translateService: TranslateService,
        private _sharedStoreService: SharedStoreService,
        private _preferencesService: PreferencesService,
        private _preferencesStoreService: PreferencesStoreService,
        private _route: ActivatedRoute,
        private _datePipe: DatePipe,
        private _router: Router,
        private _navController: NavController,
    ) {
        this._route.queryParams
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((params) => (this.currentQueryParams = params));

        this._sharedStoreService.deletedTraining$$
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((response: StreamData<Paginator<PastTrainings>>) => {
                this.pastTrainings$ = of(response).pipe(mapStreamData());
            });
    }

    getDayTranslation$(dayName: string): Observable<string> {
        if (dayName) {
            return this._translateService
                .stream(dayName)
                .pipe(map((value) => value?.toLowerCase()));
        }
        return of('');
    }

    async ionViewWillEnter(): Promise<void> {
        await Storage.remove({ key: StorageItems.QUERY_PARAMS });
        this.initView();
    }

    async ionViewWillLeave(): Promise<void> {
        await this._pastTrainingsStoreService.emitPastTrainingsQueryParams(this.currentQueryParams);
    }

    ngAfterViewChecked(): void {
        this._pastTrainingsStoreService.pastTrainingsWrapperScroll$
            .pipe(take(1))
            .subscribe((scrollTop) => {
                if (this.trainingItemWrapper) {
                    (this.trainingItemWrapper.nativeElement as HTMLDivElement).scrollTop =
                        scrollTop;
                }
            });
    }

    ngOnDestroy(): void {
        this._isSearch$.complete();
    }

    onFiltersSearchEmitted(isSearch: boolean): void {
        this._isSearch$.next(isSearch);
    }

    searchEmitted(searchText: string): void {
        this._isSearch$.next(!!searchText);
        this.page = INITIAL_PAGE;
        this.pastTrainings$ = of(searchText).pipe(
            switchMap((searchText: string) => {
                this.searchText = searchText;
                return this._pastTrainingsService
                    .searchPastTrainings(this.searchText, this.size, this.page)
                    .pipe(
                        tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                            this.showByDayStartDate = new Date();
                            this.updatePageAndSize(response);
                            await this._router.navigate([], {
                                relativeTo: this._route,
                                queryParams: this.handleQueryParams(
                                    response,
                                    searchText?.trim() ?? undefined,
                                ),
                            });
                            this.handlePaginationArrows(response);
                        }),
                        mapStreamData(),
                    );
            }),
        );
    }

    onPeriodEmitted($event: PeriodFilterType, mondayDate: Date): void {
        if (mondayDate) {
            this.periodFilter = $event;
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = mondayDate;
                this.dayActivated = {
                    Date: this.showByDayStartDate,
                    DayNumber: getCurrentDayIndex(this.showByDayStartDate),
                };
            }
            const currentPreferences = this._preferencesStoreService.getPreferences();
            this._preferencesService
                .setPreferences(
                    {
                        ...currentPreferences,
                        showByPeriod: this.periodFilter,
                    },
                    'showByPeriod',
                )
                .pipe(take(1))
                .subscribe((_) => {
                    this.pastTrainings$ = this._pastTrainingsService
                        .getPastTrainings(
                            startOfWeek(mondayDate, { weekStartsOn: 1 }),
                            this.periodFilter,
                        )
                        .pipe(
                            tap(async (response) => {
                                await this._router.navigate([], {
                                    relativeTo: this._route,
                                    queryParams: this.handleQueryParams(response),
                                });
                            }),
                            mapStreamData(),
                        );
                });
        }
    }

    onDayActivated($event: DayActivatedType): void {
        if (!this._isSearch$.getValue()) {
            this.dayActivated = $event;
            this.pastTrainings$ = this._pastTrainingsService
                .getPastTrainings($event.Date, 'day')
                .pipe(
                    tap(async (response) => {
                        await this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: this.handleQueryParams(response),
                        });
                    }),
                    mapStreamData(),
                );
        }
    }

    onPaginatorChanged($event: PaginatorChanged, dayFilterDate: Date): void {
        if ($event?.IsSearch) {
            this.pastTrainings$ = this._pastTrainingsService
                .searchPastTrainings(
                    this.searchText?.trim()?.toLowerCase() ?? '',
                    $event.Size,
                    $event.Page,
                )
                .pipe(
                    tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                        this.updatePageAndSize(response);
                        await this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: this.handleQueryParams(response, this.searchText),
                        });
                        this.handlePaginationArrows(response);
                    }),
                    mapStreamData(),
                );
        } else {
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = this.calculateDate(
                    $event.PageType,
                    undefined,
                    $event.EarliestTrainingDate,
                    dayFilterDate,
                );
                this.dayActivated = {
                    Date: this.showByDayStartDate,
                    DayNumber: getCurrentDayIndex(this.showByDayStartDate),
                };
            }
            this.pastTrainings$ = this._pastTrainingsService
                .getPastTrainings(
                    this.periodFilter === 'week'
                        ? this.onPaginatorChangedFilterHandler(this.periodFilter, $event)
                        : this.onPaginatorChangedFilterHandler(
                              this.periodFilter,
                              undefined,
                              this.showByDayStartDate,
                          ),
                    this.periodFilter,
                )
                .pipe(
                    tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                        this.handlePaginationArrows(response);
                        await this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: this.handleQueryParams(response),
                        });
                    }),
                    mapStreamData(),
                );
        }
    }

    async onTrainingItemClicked(clickedTraining: NewTraining): Promise<void> {
        this._route.queryParams.pipe(take(1)).subscribe(async (params: Params) => {
            await this._pastTrainingsStoreService.emitPastTrainingsQueryParams(
                params as PastTrainingsQueryParams,
            );
            await Storage.set({
                key: StorageItems.QUERY_PARAMS,
                value: JSON.stringify(params as PastTrainingsQueryParams),
            });
            await this._router.navigate(['/training/tabs/new-training', clickedTraining._id]);
            if (this.trainingItemWrapper) {
                const scrollTop = (this.trainingItemWrapper.nativeElement as HTMLDivElement)
                    .scrollTop;
                await this._pastTrainingsStoreService.emitWrapperScroll(scrollTop);
            }
        });
    }

    async logNewTraining(): Promise<void> {
        const dayClickedDate = add(this.dayActivated.Date, { hours: 7 });
        this._sharedStoreService.emitDayClicked(dayClickedDate.toISOString());
        await this._navController.navigateForward('/training/tabs/new-training');
    }

    //TODO: align with 'ShowByDay' feature
    tryAgain(): void {
        this.initView();
    }

    setTimePeriod$(results: PastTrainings): Observable<string> {
        const dateInterval = results.Dates;
        if (dateInterval?.StartDate && dateInterval?.EndDate) {
            const isDay = isSameDay(dateInterval.StartDate, dateInterval.EndDate);
            if (isDay) {
                return this._translateService
                    .stream(results.DayName)
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(value, dateInterval.StartDate),
                        ),
                    );
            }
            const isWeek = isSameWeek(dateInterval.StartDate, dateInterval.EndDate, {
                weekStartsOn: 1,
            });
            if (isWeek) {
                return this._translateService
                    .stream('common.week')
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(
                                value,
                                dateInterval.StartDate,
                                dateInterval.EndDate,
                            ),
                        ),
                    );
            }
            const isMonth = isSameMonth(dateInterval.StartDate, dateInterval.EndDate);
            if (isMonth) {
                const month = getMonth(dateInterval.StartDate);
                return this._translateService
                    .stream(`common.months.${ALL_MONTHS[month]}`)
                    .pipe(
                        map((value: string) =>
                            this.generateHeaderTitle(
                                value,
                                dateInterval.StartDate,
                                dateInterval.EndDate,
                            ),
                        ),
                    );
            }
            return this._translateService
                .stream('common.period')
                .pipe(
                    map((value: string) =>
                        this.generateHeaderTitle(
                            value,
                            dateInterval.StartDate,
                            dateInterval.EndDate,
                        ),
                    ),
                );
        } else {
            return of('');
        }
    }

    private initView(): void {
        this.page = this._route.snapshot.queryParamMap?.get('page')
            ? +this._route.snapshot.queryParamMap.get('page')
            : INITIAL_PAGE;
        this.size = this._route.snapshot.queryParamMap?.get('size')
            ? +this._route.snapshot.queryParamMap.get('size')
            : DEFAULT_SIZE;
        this.searchText = this._route.snapshot.queryParamMap?.get('search');
        if (this.searchText) {
            this.pastTrainings$ = this._pastTrainingsService
                .searchPastTrainings(this.searchText.trim().toLowerCase(), this.size, this.page)
                .pipe(
                    tap((response: StreamData<Paginator<PastTrainings>>) =>
                        this.handlePaginationArrows(response),
                    ),
                    mapStreamData(),
                );
        } else {
            this.periodFilter = this._route.snapshot.queryParamMap?.get(
                'showBy',
            ) as PeriodFilterType;
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = this.getDateTimeQueryParams();
                this.dayActivated = {
                    Date: this.showByDayStartDate,
                    DayNumber: getCurrentDayIndex(this.showByDayStartDate),
                };
            }
            this.pastTrainings$ = this._pastTrainingsService
                .getPastTrainings(this.getDateTimeQueryParams(), this.periodFilter ?? 'week')
                .pipe(
                    tap((response: StreamData<Paginator<PastTrainings>>) =>
                        this.handlePaginationArrows(response),
                    ),
                    mapStreamData(),
                );
        }
    }

    private onPaginatorChangedFilterHandler(
        periodFilterType: PeriodFilterType,
        $weekEvent?: PaginatorChanged,
        startOfCurrentWeek?: Date,
    ): Date {
        switch (periodFilterType) {
            case 'week': {
                return this.calculateDate(
                    $weekEvent.PageType,
                    $weekEvent.DateInterval,
                    $weekEvent.EarliestTrainingDate,
                );
            }
            case 'day': {
                return addDays(
                    startOfWeek(startOfCurrentWeek, { weekStartsOn: 1 }),
                    this.dayActivated.DayNumber,
                );
            }
            default:
                isNeverCheck(periodFilterType);
        }
    }

    private updatePageAndSize(response: StreamData<Paginator<PastTrainings>>): void {
        this.page = response?.Value?.CurrentPage ?? INITIAL_PAGE;
        this.size = response?.Value?.Size ?? DEFAULT_SIZE;
    }

    private calculateDate(
        page: Page,
        dateInterval: DateInterval,
        earliestTrainingDate: string,
        startingDate?: Date,
    ): Date {
        switch (page) {
            case 'Previous': {
                return subDays(startingDate ? startingDate : dateInterval.StartDate, 7);
            }
            case 'Next': {
                return addDays(startingDate ? startingDate : dateInterval.StartDate, 7);
            }
            case 'First': {
                return this.periodFilter === 'week'
                    ? new Date(earliestTrainingDate)
                    : calculateFirstWeekDay(earliestTrainingDate, startingDate);
            }
            case 'Last': {
                return this.periodFilter === 'week'
                    ? new Date()
                    : calculateLastWeekDay(startingDate);
            }
            default:
                return isNeverCheck(page);
        }
    }

    private handleQueryParams(
        trainingData: StreamData<Paginator<PastTrainings>>,
        searchValue?: string,
    ): PastTrainingsQueryParams {
        return {
            startDate: this.handleSpecificQueryParam(searchValue, trainingData, 'startDate'),
            endDate: this.handleSpecificQueryParam(searchValue, trainingData, 'endDate'),
            search: searchValue ?? undefined,
            page: this.handleSpecificQueryParam(searchValue, trainingData, 'page'),
            size: this.handleSpecificQueryParam(searchValue, trainingData, 'size'),
            showBy: !searchValue ? this.periodFilter : undefined,
        } as PastTrainingsQueryParams;
    }

    private handleSpecificQueryParam(
        searchValue: string | undefined,
        trainingData: StreamData<Paginator<PastTrainings>>,
        queryParam: keyof PastTrainingsQueryParams,
    ): string | void {
        if (searchValue) {
            if (trainingData?.Value?.TotalCount > 0) {
                if (queryParam === 'page') {
                    return this.page.toString();
                } else if (queryParam === 'startDate') {
                    return format(
                        trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(),
                        QUERY_PARAMS_DATE_FORMAT,
                    );
                } else if (queryParam === 'endDate') {
                    return format(
                        trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(),
                        QUERY_PARAMS_DATE_FORMAT,
                    );
                } else {
                    return this.size.toString();
                }
            } else {
                return undefined;
            }
        } else {
            if (queryParam === 'startDate') {
                return format(
                    trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(),
                    QUERY_PARAMS_DATE_FORMAT,
                );
            } else if (queryParam === 'endDate') {
                return format(
                    trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(),
                    QUERY_PARAMS_DATE_FORMAT,
                );
            } else {
                return undefined;
            }
        }
    }

    private handlePaginationArrows(response: StreamData<Paginator<PastTrainings>>): void {
        if (response.Value.Results.EarliestTrainingDate) {
            this.isPreviousPage = response.Value.Results.IsPreviousWeek ?? false;
            this.isNextPage = response.Value.Results.IsNextWeek ?? false;
        } else {
            this.isPreviousPage = !!response.Value.Previous;
            this.isNextPage = !!response.Value.Next;
        }
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate = this._route.snapshot.queryParams?.startDate?.split('-') ?? [];
        const utc =
            splittedDate.length > 0
                ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString()
                : new Date().toUTCString();
        return startOfDay(new Date(utc));
    }

    private generateHeaderTitle(period: string, startDate: Date, endDate?: Date): string {
        if (endDate) {
            return `
                <strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(
                    startDate,
                    this.dateFormat,
                )} - ${this._datePipe.transform(endDate, this.dateFormat)})</span>`;
        } else {
            return `<strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this._datePipe.transform(
                    startDate,
                    this.dateFormat,
                )})</span`;
        }
    }
}
