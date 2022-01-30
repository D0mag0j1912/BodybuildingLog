import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, getMonth, isSameMonth, isSameWeek, isSameYear, startOfDay, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { ALL_MONTHS } from '../../../helpers/months.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { TrainingData } from '../../../models/common/interfaces/common.model';
import { DateInterval, MAX_TRAININGS_PER_PAGE, Page, PastTrainingsQueryParams, PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT, TEMPLATE_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@Component({
    selector: 'bl-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent {

    readonly food: number = 3000;
    trainingsPerPage: number = MAX_TRAININGS_PER_PAGE;
    currentPage: number = 1;
    pageSizeOptions: number[] = [1, 2, 5, 10];

    isNextDisabled: boolean = true;
    isPreviousDisabled: boolean = false;

    pastTrainings$: Observable<TrainingData<PastTrainingsResponse>> | undefined = undefined;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) {
        this.sharedService.deletedTraining$$.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((response: TrainingData<PastTrainingsResponse>) => {
            this.pastTrainings$ =
                of(response)
                    .pipe(
                        mapStreamData(),
                    );
            this.changeDetectorRef.markForCheck();
        });

        const searchFilter = this.route.snapshot.queryParamMap?.get('search');
        const currentPage = +this.route.snapshot.queryParamMap?.get('page') ?? 1;
        if (searchFilter) {
            this.pastTrainings$ =
                this.pastTrainingsService.searchPastTrainings(
                    searchFilter.trim(),
                    this.trainingsPerPage,
                    currentPage,
                ).pipe(
                        tap((x: TrainingData<PastTrainingsResponse>) => this.handleArrows(x)),
                        mapStreamData(),
                    );
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
                .pipe(
                    tap((response: TrainingData<PastTrainingsResponse>) => this.handleNextWeek(response?.Value?.Dates)),
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
        this.pastTrainings$ =
            of($event)
                .pipe(
                    switchMap((value: string) =>
                        this.pastTrainingsService.searchPastTrainings(
                            value,
                            this.trainingsPerPage,
                            this.currentPage,
                        ).pipe(
                            tap(async (trainingData: TrainingData<PastTrainingsResponse>) => {
                                this.handleArrows(trainingData);
                                await this.router.navigate([], {
                                    relativeTo: this.route,
                                    queryParams: this.handleQueryParams(
                                        trainingData,
                                        $event.trim() !== '' ? $event.trim() : undefined,
                                    ),
                                });
                            }),
                            mapStreamData(),
                        ),
                    ),
                );
    }

    loadNewPage(
        previousOrNext: Page,
        dateInterval: DateInterval,
    ): void {
        this.isSearch$
            .pipe(
                take(1),
                tap((isSearch: boolean) => {
                    if (isSearch) {
                        previousOrNext === 'Next' ? this.currentPage++ : this.currentPage--;
                        const currentSearchValue = this.route.snapshot.queryParamMap?.get('search');
                        this.pastTrainings$ =
                            this.pastTrainingsService.searchPastTrainings(
                                currentSearchValue,
                                this.trainingsPerPage,
                                this.currentPage,
                            ).pipe(
                                tap(async (trainingData: TrainingData<PastTrainingsResponse>) => {
                                    await this.router.navigate([], {
                                        relativeTo: this.route,
                                        queryParams: this.handleQueryParams(
                                            trainingData,
                                            currentSearchValue,
                                        ),
                                    });
                                }),
                                mapStreamData(),
                            );
                    }
                    else {
                        this.pastTrainings$ =
                            this.pastTrainingsService.getPastTrainings(previousOrNext === 'Previous'
                                ? subDays(
                                    utcToZonedTime(
                                        dateInterval.StartDate,
                                        environment.TIMEZONE,
                                    ), 7)
                                : addDays(
                                    utcToZonedTime(
                                        dateInterval.StartDate,
                                        environment.TIMEZONE,
                                    ), 7))
                                .pipe(
                                    tap(async (result: TrainingData<PastTrainingsResponse>) => {
                                        this.handleNextWeek(result?.Value?.Dates);
                                        await this.router.navigate([], {
                                            relativeTo: this.route,
                                            queryParams: this.handleQueryParams(result),
                                        });
                                    }),
                                    mapStreamData(),
                                );
                    }
                }),
            )
            .subscribe();
    }

    setNextPageTooltip(isSearch: boolean): Observable<string> {
        if (isSearch) {
            return this.translateService.stream('common.next_page');
        }
        else {
            return this.translateService.stream(`training.past_trainings.${!this.isNextDisabled ? 'buttons.next_week' : 'disabled_next_week'}`);
        }
    }

    setNextPageTooltipClass(isSearch: boolean): string {
        if (isSearch) {
            return 'tooltip';
        }
        else {
            return this.isNextDisabled ? 'tooltip-error' : 'tooltip';
        }
    }

    tryAgain(): void {
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                mapStreamData(),
            );
    }

    setTimePeriod(dateInterval: DateInterval): Observable<string> {
        const isWeek = isSameWeek(
            dateInterval.StartDate,
            dateInterval.EndDate,
            { weekStartsOn: 1 },
        );
        if (isWeek) {
            return this.translateService.stream('common.week');
        }
        const isMonth = isSameMonth(
            dateInterval.StartDate,
            dateInterval.EndDate,
        );
        if (isMonth) {
            const month = getMonth(dateInterval.StartDate);
            return this.translateService.stream(`common.months.${ALL_MONTHS[month]}`);
        }
        const isYear = isSameYear(
            dateInterval.StartDate,
            dateInterval.EndDate,
        );
        if (isYear) {
            return this.translateService.stream('common.year');
        }
        return this.translateService.stream('common.period');
    }

    private handleQueryParams(
        trainingData: TrainingData<PastTrainingsResponse>,
        searchValue?: string,
    ): PastTrainingsQueryParams {
        return {
            startDate: format(
                utcToZonedTime(
                    trainingData?.Value?.Dates?.StartDate,
                    environment.TIMEZONE)
                , QUERY_PARAMS_DATE_FORMAT),
            endDate: format(
                utcToZonedTime(
                    trainingData?.Value?.Dates?.EndDate,
                    environment.TIMEZONE,
                ), QUERY_PARAMS_DATE_FORMAT),
            search: searchValue ?? undefined,
            page: searchValue ? this.currentPage.toString() : undefined,
            pageSize: searchValue ? this.trainingsPerPage.toString(): undefined,
        } as PastTrainingsQueryParams;
    }

    private handleArrows(x: TrainingData<PastTrainingsResponse>): void {
        if (x?.Value?.TotalTrainings <= MAX_TRAININGS_PER_PAGE) {
            this.isNextDisabled = true;
            this.isPreviousDisabled = true;
        }
        else {
            this.isPreviousDisabled = true;
            this.isNextDisabled = false;
        }
    }

    private handleNextWeek(dateInterval: DateInterval): void {
        const arrayOfDates: number[] = eachDayOfInterval({
            start: utcToZonedTime(
                dateInterval.StartDate,
                environment.TIMEZONE),
            end: utcToZonedTime(
                dateInterval.EndDate,
                environment.TIMEZONE),
        }).map((date: Date) => date.getTime());
        this.isNextDisabled = arrayOfDates.includes(startOfDay(new Date()).getTime());
        this.changeDetectorRef.markForCheck();
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate: string[] = (this.route.snapshot.queryParams?.startDate).split('-');
        const utc: string = new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString();
        return utcToZonedTime(new Date(utc), environment.TIMEZONE);
    }
}
