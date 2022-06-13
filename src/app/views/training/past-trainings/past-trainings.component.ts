import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, format, getMonth, isSameDay, isSameMonth, isSameWeek, startOfDay, startOfWeek, subDays } from 'date-fns';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from '../../../services/shared/shared.service';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator, INITIAL_PAGE, DEFAULT_SIZE, PaginatorChanged } from '../../../models/common/interfaces/paginator.model';
import { DateInterval, PastTrainingsQueryParams, PastTrainings, PeriodFilterType } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT, TEMPLATE_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/api/training/past-trainings.service';
import { Page } from '../../../models/common/types/page.type';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-state.service';
import { PreferencesService } from '../../../services/shared/preferences.service';
import { DayActivatedType } from './show-by-day/show-by-day.component';

enum Heights {
    WEEK_HEIGHT = 315,
    SEARCH_HEIGHT = 345,
}

@Component({
    selector: 'bl-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent {

    readonly food: number = 3000;
    readonly pageSizeOptions: number[] = [1, 3, 5, 10];
    size: number = DEFAULT_SIZE;
    page: number = INITIAL_PAGE;
    searchText = '';
    periodFilter: PeriodFilterType = this.preferencesStateService.getPreferences()?.ShowByPeriod ?? 'week';
    dayActivated: DayActivatedType = {
        Date: startOfDay(new Date()),
        DayNumber: 0,
    };
    showByDayStartDate: Date;

    isNextPage = true;
    isPreviousPage = true;
    isSearch = false;

    pastTrainings$: Observable<StreamData<Paginator<PastTrainings>>> | undefined = undefined;

    @ViewChild('itemWrapper', { read: ElementRef })
    trainingItemWrapper: ElementRef | undefined;

    @ViewChild('timePeriod', { read: ElementRef })
    set timePeriodEl(timePeriodElement: ElementRef) {
        if (timePeriodElement) {
            const trainingElement = (this.trainingItemWrapper?.nativeElement as HTMLDivElement);
            if (trainingElement) {
                trainingElement.style.maxHeight = `calc(100vh - ${this.isSearch ? Heights.SEARCH_HEIGHT : Heights.WEEK_HEIGHT}px)`;
            }
        }
    }

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly pastTrainingsStoreService: PastTrainingsStoreService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStateService: PreferencesStoreService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
        private readonly datePipe: DatePipe,
        private readonly router: Router,
    ) {
        this.sharedService.deletedTraining$$
            .pipe(
                takeUntil(this.unsubscribeService),
            ).subscribe((response: StreamData<Paginator<PastTrainings>>) => {
                this.pastTrainings$ =
                    of(response)
                        .pipe(mapStreamData());
                this.changeDetectorRef.markForCheck();
            });
    }

    get dateFormat(): string {
        return TEMPLATE_DATE_FORMAT;
    }
    //TODO: make simple stream
    getPeriodTranslation$(): Observable<string> {
        return this.translateService.stream(`common.${this.periodFilter}`)
            .pipe(
                map(value => value?.toLowerCase()),
            );
    }

    ionViewWillEnter(): void {
        this.pastTrainingsStoreService.isSearch$
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe(isSearch => {
                this.isSearch = isSearch;
                this.changeDetectorRef.markForCheck();
            });
        this.initView();
    }

    searchEmitted(searchText: string): void {
        this.pastTrainingsStoreService.emitSearch(searchText);
        this.page = INITIAL_PAGE;
        this.pastTrainings$ =
            of(searchText)
                .pipe(
                    switchMap((searchText: string) => {
                        this.searchText = searchText;
                        return this.pastTrainingsService.searchPastTrainings(
                            this.searchText,
                            this.size,
                            this.page,
                        ).pipe(
                            tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                                this.updatePageAndSize(response);
                                await this.router.navigate([], {
                                    relativeTo: this.route,
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

    onPeriodEmitted(
        $event: PeriodFilterType,
        mondayDate: Date,
    ): void {
        if (mondayDate) {
            this.periodFilter = $event;
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = mondayDate;
            }
            const currentPreferences = this.preferencesStateService.getPreferences();
            this.preferencesService.setPreferences(
                {
                    ...currentPreferences,
                    ShowByPeriod: this.periodFilter,
                },
                'showByPeriod',
            ).pipe(
                take(1),
            ).subscribe(_ => {
                this.pastTrainings$ = this.pastTrainingsService
                    .getPastTrainings(
                        startOfWeek(mondayDate, { weekStartsOn: 1 }),
                        this.periodFilter,
                    ).pipe(
                        tap(async response => {
                            await this.router.navigate([], {
                                relativeTo: this.route,
                                queryParams: this.handleQueryParams(response),
                            });
                        }),
                        mapStreamData(),
                    );
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    onDayActivated($event: DayActivatedType): void {
        if (!this.isSearch) {
            this.dayActivated = $event;
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings($event.Date, 'day')
                .pipe(
                    tap(async response => {
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: this.handleQueryParams(response),
                        });
                    }),
                    mapStreamData(),
                );
        }
    }

    onPaginatorChanged(
        $event: PaginatorChanged,
        dayFilterDate: Date,
    ): void {
        if ($event?.IsSearch) {
            this.pastTrainings$ =
                this.pastTrainingsService.searchPastTrainings(
                    this.searchText?.trim()?.toLowerCase() ?? '',
                    $event.Size,
                    $event.Page,
                ).pipe(
                    tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                        this.updatePageAndSize(response);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: this.handleQueryParams(
                                response,
                                this.searchText,
                            ),
                        });
                        this.handlePaginationArrows(response);
                    }),
                    mapStreamData(),
                );
        }
        else {
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = this.calculateDate(
                    $event.PageType,
                    undefined,
                    $event.EarliestTrainingDate,
                    dayFilterDate,
                );
            }
            this.pastTrainings$ =
                this.pastTrainingsService.getPastTrainings(
                    this.periodFilter === 'week'
                    ?   this.onPaginatorChangedFilterHandler(this.periodFilter, $event)
                    :   this.onPaginatorChangedFilterHandler(
                            this.periodFilter,
                            undefined,
                            this.showByDayStartDate,
                    ),
                    this.periodFilter,
                ).pipe(
                    tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                        this.handlePaginationArrows(response);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: this.handleQueryParams(response),
                        });
                    }),
                    mapStreamData(),
                );
        }
    }
    //TODO: align with 'ShowByDay' feature
    tryAgain(): void {
        this.initView();
    }

    setTimePeriod$(dateInterval: DateInterval): Observable<string> {
        if (dateInterval?.StartDate && dateInterval?.EndDate) {
            const isDay = isSameDay(
                dateInterval.StartDate,
                dateInterval.EndDate,
            );
            if (isDay) {
                return this.translateService.stream(`common.day`)
                    .pipe(
                        map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate)),
                    );
            }
            const isWeek = isSameWeek(
                dateInterval.StartDate,
                dateInterval.EndDate,
                { weekStartsOn: 1 },
            );
            if (isWeek) {
                return this.translateService.stream('common.week')
                    .pipe(
                        map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)),
                    );
            }
            const isMonth = isSameMonth(
                dateInterval.StartDate,
                dateInterval.EndDate,
            );
            if (isMonth) {
                const month = getMonth(dateInterval.StartDate);
                return this.translateService.stream(`common.months.${ALL_MONTHS[month]}`)
                    .pipe(
                        map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)),
                    );
            }
            return this.translateService.stream('common.period')
                .pipe(
                    map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)),
                );
        }
        else {
            return of('');
        }
    }

    private initView(): void {
        this.page = this.route.snapshot.queryParamMap?.get('page') ? +this.route.snapshot.queryParamMap.get('page') : INITIAL_PAGE;
        this.size = this.route.snapshot.queryParamMap?.get('size') ? +this.route.snapshot.queryParamMap.get('size') : DEFAULT_SIZE;
        this.searchText = this.route.snapshot.queryParamMap?.get('search');
        if (this.searchText) {
            this.pastTrainings$ = this.pastTrainingsService.searchPastTrainings(
                this.searchText.trim().toLowerCase(),
                this.size,
                this.page,
            ).pipe(
                tap((response: StreamData<Paginator<PastTrainings>>) => this.handlePaginationArrows(response)),
                mapStreamData(),
            );
        }
        else {
            this.periodFilter = this.route.snapshot.queryParamMap?.get('showBy') as PeriodFilterType;
            if (this.periodFilter === 'day') {
                this.showByDayStartDate = this.getDateTimeQueryParams();
            }
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(
                this.getDateTimeQueryParams(),
                this.periodFilter ?? 'week',
            ).pipe(
                tap((response: StreamData<Paginator<PastTrainings>>) => this.handlePaginationArrows(response)),
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
                return this.calculateDate($weekEvent.PageType, $weekEvent.DateInterval, $weekEvent.EarliestTrainingDate);
            }
            case 'day': {
                return addDays(startOfWeek(startOfCurrentWeek, { weekStartsOn: 1 }), this.dayActivated.DayNumber);
            }
            default:
                isNeverCheck(periodFilterType);
        }
    }

    private updatePageAndSize(response: StreamData<Paginator<PastTrainings>>): void {
        this.page = response?.Value?.CurrentPage ?? INITIAL_PAGE;
        this.size = response?.Value?.Size ?? DEFAULT_SIZE;
        this.changeDetectorRef.markForCheck();
    }

    private calculateDate(
        page: Page,
        dateInterval: DateInterval,
        earliestTrainingDate: Date,
        startOfCurrentWeek?: Date,
    ): Date {
        switch (page) {
            case 'Previous': {
                return subDays(startOfCurrentWeek ? startOfCurrentWeek : dateInterval.StartDate, 7);
            }
            case 'Next': {
                return addDays(startOfCurrentWeek ? startOfCurrentWeek : dateInterval.StartDate, 7);
            }
            case 'First': {
                return new Date(earliestTrainingDate);
            }
            case 'Last': {
                return new Date();
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
                }
                else if (queryParam === 'startDate') {
                    return format(trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
                }
                else if (queryParam === 'endDate') {
                    return format(trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
                }
                else {
                    return this.size.toString();
                }
            }
            else {
                return undefined;
            }
        }
        else {
            if (queryParam === 'startDate') {
                return format(trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
            }
            else if (queryParam === 'endDate') {
                return format(trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
            }
            else {
                return undefined;
            }
        }
    }

    private handlePaginationArrows(x: StreamData<Paginator<PastTrainings>>): void {
        this.isPreviousPage = !!x?.Value?.Previous;
        this.isNextPage = !!x?.Value?.Next;
        if (x?.Value?.Results?.IsPreviousWeek !== undefined && x?.Value?.Results?.IsNextWeek !== undefined) {
            this.isNextPage = x.Value.Results.IsNextWeek;
            this.isPreviousPage = x.Value.Results.IsPreviousWeek;
        }
        this.changeDetectorRef.markForCheck();
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate = this.route.snapshot.queryParams?.startDate?.split('-') ?? [];
        const utc = splittedDate.length > 0 ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString() : new Date().toUTCString();
        return startOfDay(new Date(utc));
    }

    private generateHeaderTitle(
        period: string,
        startDate: Date,
        endDate?: Date,
    ): string {
        if (endDate) {
            return `
                <strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this.datePipe.transform(startDate, this.dateFormat)} - ${this.datePipe.transform(endDate, this.dateFormat)})</span>`;
        }
        else {
            return `<strong class="header-title--key">${period}</strong>
                <span class="header-title--value">(${this.datePipe.transform(startDate, this.dateFormat)})</span`;
        }
    }

}
