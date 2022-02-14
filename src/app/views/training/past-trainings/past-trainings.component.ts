import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, format, getMonth, isSameDay, isSameMonth, isSameWeek, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator } from '../../../models/common/interfaces/paginator.model';
import { DateInterval, MAX_TRAININGS_PER_PAGE, PastTrainingsQueryParams, PastTrainings, INITIAL_PAGE } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT, TEMPLATE_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';
import { Page } from '../../../models/common/types/page.type';

type QueryParam = keyof PastTrainingsQueryParams;
enum Heights {
    LOWER_HEIGHT = 305,
    HIGHER_HEIGHT = 335,
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
    readonly pageSizeOptions: number[] = [1, 2, 5, 10];
    size: number = MAX_TRAININGS_PER_PAGE;
    page: number = INITIAL_PAGE;

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
                if ((timePeriodElement.nativeElement as HTMLDivElement).offsetHeight === 30) {
                    trainingElement.style.maxHeight = `calc(100vh - ${Heights.LOWER_HEIGHT}px)`;
                }
                else if ((timePeriodElement.nativeElement as HTMLDivElement).offsetHeight > 30) {
                    trainingElement.style.maxHeight = `calc(100vh - ${Heights.HIGHER_HEIGHT}px)`;
                }
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

        this.page = this.route.snapshot.queryParamMap?.get('page') ? +this.route.snapshot.queryParamMap.get('page') : 1;
        const searchFilter = this.route.snapshot.queryParamMap?.get('search');
        if (searchFilter) {
            this.pastTrainings$ =
                this.pastTrainingsService.searchPastTrainings(
                    searchFilter.trim().toLowerCase(),
                    this.size,
                    this.page,
                ).pipe(
                        tap((x: StreamData<Paginator<PastTrainings>>) => this.handleArrows(x)),
                        mapStreamData(),
                    );
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
                .pipe(
                    tap((response: StreamData<Paginator<PastTrainings>>) => this.handleArrows(response)),
                    mapStreamData(),
                );
        }

    }

    get spinnerSize(): number {
        return SPINNER_SIZE;
    }

    get dateFormat(): string {
        return TEMPLATE_DATE_FORMAT;
    }

    get maxTrainingsPerPage(): number {
        return MAX_TRAININGS_PER_PAGE;
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
                    switchMap((value: string) =>
                        this.pastTrainingsService.searchPastTrainings(
                            value,
                            this.size,
                            this.page,
                        ).pipe(
                            tap(async (response: StreamData<Paginator<PastTrainings>>) => {
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

    loadPage(
        page: Page,
        dateInterval?: DateInterval,
        earliestTrainingDate?: Date,
    ): void {
        this.isSearch$
            .pipe(
                take(1),
                tap((isSearch: boolean) => {
                    if (isSearch) {
                        page === 'Next' ? this.page++ : this.page--;
                        const currentSearchValue = this.route.snapshot.queryParamMap?.get('search') ?? undefined;
                        this.pastTrainings$ =
                            this.pastTrainingsService.searchPastTrainings(
                                currentSearchValue?.trim()?.toLowerCase() ?? '',
                                this.size,
                                this.page,
                            ).pipe(
                                tap(async (response: StreamData<Paginator<PastTrainings>>) => {
                                    await this.router.navigate([], {
                                        relativeTo: this.route,
                                        queryParams: this.handleQueryParams(
                                            response,
                                            currentSearchValue,
                                        ),
                                    });
                                    this.handleArrows(response);
                                }),
                                mapStreamData(),
                            );
                    }
                    else {
                        this.pastTrainings$ =
                            this.pastTrainingsService.getPastTrainings(this.calculateDate(page, dateInterval, earliestTrainingDate))
                                .pipe(
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
                }),
            )
            .subscribe();
    }

    setPageTooltip(
        isSearch: boolean,
        page: Page,
    ): Observable<string> {
        if (isSearch) {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_page' : 'last_page'}`);
            }
            else {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'Next' ? 'next_page' : 'previous_page'}`);
            }
        }
        else {
            if (page === 'First' || page === 'Last') {
                return this.translateService.stream(`training.past_trainings.buttons.${page === 'First' ? 'first_week' : 'last_week'}`);
            }
            else {
                if (page === 'Next') {
                    return this.translateService.stream(`training.past_trainings.${this.isNextPage ? 'buttons.next_week' : 'disabled_next_week'}`);
                }
                else {
                    return this.translateService.stream(`training.past_trainings.${this.isPreviousPage ? 'buttons.previous_week' : 'disabled_previous_week'}`);
                }
            }
        }
    }

    setPageTooltipClass(
        isSearch: boolean,
        page: Page,
    ): string {
        if (isSearch) {
            return 'tooltip';
        }
        else {
            if (page === 'First' || page === 'Last') {
                return 'tooltip';
            }
            if (page === 'Next') {
                return this.isNextPage ? 'tooltip' : 'tooltip-error';
            }
            else {
                return this.isPreviousPage ? 'tooltip' : 'tooltip-error';
            }
        }
    }

    tryAgain(): void {
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                mapStreamData(),
            );
    }

    setTimePeriod(dateInterval: DateInterval): Observable<string> {
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

    private calculateDate(
        page: Page,
        dateInterval: DateInterval,
        earliestTrainingDate: Date,
    ): Date {
        //Add no never case
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
            default:
                return undefined;
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
        queryParam: QueryParam,
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
        if (x?.Value?.TotalCount <= MAX_TRAININGS_PER_PAGE) {
            this.isNextPage = false;
            this.isPreviousPage = false;
        }
        else {
            this.isPreviousPage = !!x?.Value?.Previous;
            this.isNextPage = !!x?.Value?.Next;
        }
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
