import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, format, getMonth, isSameDay, isSameMonth, isSameWeek, startOfWeek, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Observable, of } from 'rxjs';
import { delay, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator, INITIAL_PAGE, DEFAULT_SIZE, PaginatorChanged } from '../../../models/common/interfaces/paginator.model';
import { DateInterval, PastTrainingsQueryParams, PastTrainings, PastTrainingsFilterType } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT, TEMPLATE_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';
import { Page } from '../../../models/common/types/page.type';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';

enum Heights {
    LOWER_WEEK_HEIGHT = 315,
    HIGHER_WEEK_HEIGHT = 345,
    LOWER_SEARCH_HEIGHT = 345,
    HIGHER_SEARCH_HEIGHT = 375,
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
    periodEmitted: PastTrainingsFilterType = 'week';

    isNextPage = true;
    isPreviousPage = true;

    pastTrainings$: Observable<StreamData<Paginator<PastTrainings>>> | undefined = undefined;

    @ViewChild('itemWrapper', { read: ElementRef })
    trainingItemWrapper: ElementRef | undefined;

    @ViewChild('timePeriod', { read: ElementRef })
    set timePeriodEl(timePeriodElement: ElementRef) {
        if (timePeriodElement) {
            const trainingElement = (this.trainingItemWrapper?.nativeElement as HTMLDivElement);
            if (trainingElement) {
                this.isSearch$
                    .pipe(
                        delay(50),
                        takeUntil(this.unsubscribeService),
                    )
                    .subscribe((isSearch: boolean) => {
                        if ((timePeriodElement.nativeElement as HTMLDivElement).offsetHeight === 24) {
                            trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? Heights.LOWER_SEARCH_HEIGHT : Heights.LOWER_WEEK_HEIGHT}px)`;
                        }
                        else if ((timePeriodElement.nativeElement as HTMLDivElement).offsetHeight > 24) {
                            trainingElement.style.maxHeight = `calc(100vh - ${isSearch ? Heights.HIGHER_SEARCH_HEIGHT : Heights.HIGHER_WEEK_HEIGHT}px)`;
                        }
                    });
            }
        }
    }

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
        private readonly datePipe: DatePipe,
        private readonly router: Router,
    ) {
        this.sharedService.deletedTraining$$.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((response: StreamData<Paginator<PastTrainings>>) => {
            this.pastTrainings$ =
                of(response)
                    .pipe(mapStreamData());
            this.changeDetectorRef.markForCheck();
        });

        this.page = this.route.snapshot.queryParamMap?.get('page') ? +this.route.snapshot.queryParamMap.get('page') : INITIAL_PAGE;
        this.size = this.route.snapshot.queryParamMap?.get('size') ? +this.route.snapshot.queryParamMap.get('size') : DEFAULT_SIZE;
        this.searchText = this.route.snapshot.queryParamMap?.get('search');
        if (this.searchText) {
            this.pastTrainings$ =
                this.pastTrainingsService.searchPastTrainings(
                    this.searchText.trim().toLowerCase(),
                    this.size,
                    this.page,
                ).pipe(
                        tap((x: StreamData<Paginator<PastTrainings>>) => this.handleArrows(x)),
                        mapStreamData(),
                    );
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(
                this.getDateTimeQueryParams(),
                'week',
            )
                .pipe(
                    tap((response: StreamData<Paginator<PastTrainings>>) => this.handleArrows(response)),
                    mapStreamData(),
                );
        }

    }

    get dateFormat(): string {
        return TEMPLATE_DATE_FORMAT;
    }

    get isSearch$(): Observable<boolean> {
        return this.route.queryParamMap
            .pipe(
                map((params: ParamMap) => !!params?.get('search')),
            );
    }

    searchEmitted($event: string): void {
        this.page = INITIAL_PAGE;
        this.pastTrainings$ =
            of($event)
                .pipe(
                    tap(searchText => this.searchText = searchText),
                    switchMap((searchText: string) =>
                        this.pastTrainingsService.searchPastTrainings(
                            searchText,
                            this.size,
                            this.page,
                        ).pipe(
                            tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                                this.updatePageAndSize(response);
                                await this.router.navigate([], {
                                    relativeTo: this.route,
                                    queryParams: this.handleQueryParams(
                                        response,
                                        $event.trim() !== '' ? $event.trim() : undefined,
                                    ),
                                });
                                this.handleArrows(response);
                            }),
                            mapStreamData(),
                        ),
                    ),
                );
    }

    onPeriodEmitted(
        $event: PastTrainingsFilterType,
        mondayDate: Date,
    ): void {
        this.periodEmitted = $event;
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(
            this.periodEmitted === 'week' ? new Date() : startOfWeek(mondayDate, { weekStartsOn: 1 }),
            this.periodEmitted,
        ).pipe(
            mapStreamData(),
            finalize(() => this.changeDetectorRef.markForCheck()),
        );
    }

    onDayActivated($event: Date): void {
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings($event, 'day')
            .pipe(
                mapStreamData(),
            );
    }

    onPaginatorChanged($event: PaginatorChanged): void {
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
                        this.handleArrows(response);
                    }),
                    mapStreamData(),
                );
        }
        else {
            this.pastTrainings$ =
                this.pastTrainingsService.getPastTrainings(
                    this.calculateDate($event.PageType, $event.DateInterval, $event.EarliestTrainingDate),
                    'week',
                ).pipe(
                    tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                        this.handleArrows(response);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: this.handleQueryParams(response),
                        });
                    }),
                    mapStreamData(),
                );
        }
    }

    tryAgain(): void {
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(
            this.getDateTimeQueryParams(),
            'week',
        ).pipe(
            mapStreamData(),
        );
    }

    setTimePeriod(dateInterval: DateInterval): Observable<string> {
        const isDay = isSameDay(
            dateInterval?.StartDate,
            dateInterval?.EndDate,
        );
        if (isDay || !dateInterval?.EndDate) {
            return this.translateService.stream(`common.day`)
                .pipe(
                    map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate)),
                );
        }
        const isWeek = isSameWeek(
            dateInterval?.StartDate,
            dateInterval?.EndDate,
            { weekStartsOn: 1 },
        );
        if (isWeek) {
            return this.translateService.stream('common.week')
                .pipe(
                    map((value: string) => this.generateHeaderTitle(value, dateInterval.StartDate, dateInterval.EndDate)),
                );
        }
        const isMonth = isSameMonth(
            dateInterval?.StartDate,
            dateInterval?.EndDate,
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

    private updatePageAndSize(response: StreamData<Paginator<PastTrainings>>): void {
        this.page = response?.Value?.CurrentPage ?? INITIAL_PAGE;
        this.size = response?.Value?.Size ?? DEFAULT_SIZE;
        this.changeDetectorRef.markForCheck();
    }

    private calculateDate(
        page: Page,
        dateInterval: DateInterval,
        earliestTrainingDate: Date,
    ): Date {
        switch (page) {
            case 'Previous': {
                return subDays(
                    utcToZonedTime(
                        dateInterval.StartDate,
                        environment.TIMEZONE,
                    ), 7);
            }
            case 'Next': {
                return addDays(
                    utcToZonedTime(
                        dateInterval.StartDate,
                        environment.TIMEZONE,
                    ), 7);
            }
            case 'First': {
                return earliestTrainingDate;
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
                    return format(
                        utcToZonedTime(
                            trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(),
                            environment.TIMEZONE)
                        , QUERY_PARAMS_DATE_FORMAT);
                }
                else if (queryParam === 'endDate') {
                    return format(
                        utcToZonedTime(
                            trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(),
                            environment.TIMEZONE,
                        ), QUERY_PARAMS_DATE_FORMAT);
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
                return format(
                    utcToZonedTime(
                        trainingData?.Value?.Results?.Dates?.StartDate ?? new Date(),
                        environment.TIMEZONE)
                    , QUERY_PARAMS_DATE_FORMAT);
            }
            else if (queryParam === 'endDate') {
                return format(
                    utcToZonedTime(
                        trainingData?.Value?.Results?.Dates?.EndDate ?? new Date(),
                        environment.TIMEZONE,
                    ), QUERY_PARAMS_DATE_FORMAT);
            }
            else {
                return undefined;
            }
        }
    }

    private handleArrows(x: StreamData<Paginator<PastTrainings>>): void {
        this.isPreviousPage = !!x?.Value?.Previous;
        this.isNextPage = !!x?.Value?.Next;
        if (x?.Value?.Results?.IsPreviousWeek !== undefined && x?.Value?.Results?.IsNextWeek !== undefined) {
            this.isNextPage = x.Value.Results.IsNextWeek;
            this.isPreviousPage = x.Value.Results.IsPreviousWeek;
        }
        this.changeDetectorRef.markForCheck();
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate = (this.route.snapshot.queryParams?.startDate as string)?.split('-') ?? [];
        const utc = splittedDate.length > 0 ? new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString() : new Date().toUTCString();
        return utcToZonedTime(new Date(utc), environment.TIMEZONE);
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
