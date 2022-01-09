import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, getMonth, isSameMonth, isSameWeek, isSameYear, startOfDay, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { catchError, endWith, finalize, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { SearchQuery } from '../../../models/common.model';
import { Data } from '../../../models/common.model';
import { DateInterval, PastTrainingsQueryParams, PastTrainingsResponse, Week } from '../../../models/training/past-trainings/past-trainings.model';
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

    isNextWeekDisabled: boolean = true;

    pastTrainings$: Observable<Data<PastTrainingsResponse>> = undefined;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) {
        /* this.sharedService.deletedTraining$$.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((response: PastTrainingsResponse) => {
            this.pastTrainings$ = of(response);
            this.changeDetectorRef.markForCheck();
        }); */

        this.sharedService.setLoading(true);
        const searchFilter = this.route.snapshot.queryParamMap?.get('search');
        if (searchFilter) {
            /* this.pastTrainings$ =
                //TODO: implement query param check on backend (security)
                this.pastTrainingsService.searchPastTrainings((searchFilter as string).trim())
                    .pipe(
                        catchError(_ => {
                            this.isError$.next(true);
                            return EMPTY;
                        }),
                        finalize(() => this.sharedService.setLoading(false)),
                    ); */
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
                .pipe(
                    map((response: Data<PastTrainingsResponse>) => ({
                        isLoading: false,
                        value: response.value,
                        isError: false,
                    } as Data<PastTrainingsResponse>)),
                    catchError(_ => of({
                        isLoading: false,
                        isError: true,
                    } as Data<PastTrainingsResponse>)),
                    startWith({
                        isLoading: true,
                        isError: false,
                    } as Data<PastTrainingsResponse>),
                    /* tap((response: PastTrainingsResponse) => this.handleNextWeek(response.dates)),
                    catchError(_ => {
                        this.isError$.next(true);
                        return EMPTY;
                    }),
                    //TODO: shut down spinner on stream completion
                    endWith({
                        ...tempPastTrainings,
                        isLoading: false,
                    }), */
                );
        }

    }

    get spinnerSize(): number {
        return SPINNER_SIZE;
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

    //TODO: implement loading spinner while searching
    searchEmitted($event: SearchQuery<PastTrainingsResponse>): void {
        /* this.sharedService.setLoading(true);
        this.pastTrainings$ =
            of($event.data)
                .pipe(
                    tap(async () => {
                        const queryParams: PastTrainingsQueryParams = {
                            startDate: format(
                                utcToZonedTime(
                                    $event.data.dates.startDate as Date,
                                    environment.TIMEZONE as string)
                                , QUERY_PARAMS_DATE_FORMAT),
                            endDate: format(
                                utcToZonedTime(
                                    $event.data.dates.endDate as Date,
                                    environment.TIMEZONE as string,
                                ), QUERY_PARAMS_DATE_FORMAT),
                            search: $event?.searchValue !== '' ? $event.searchValue : undefined,
                        };
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: queryParams,
                        });
                    }),
                    finalize(() => {
                        this.sharedService.setLoading(false);
                        this.changeDetectorRef.markForCheck();
                    }),
                ); */
    }

    loadWeekTraining(
        previousOrNextWeek: Week,
        dateInterval: DateInterval,
    ): void {
        /* this.sharedService.setLoading(true);

        this.pastTrainings$ =
            this.pastTrainingsService.getPastTrainings(previousOrNextWeek === 'Previous week'
                ? subDays(
                    utcToZonedTime(
                        dateInterval.startDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date
                : addDays(
                    utcToZonedTime(
                        dateInterval.startDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date)
                .pipe(
                    tap(async (result: PastTrainingsResponse) => {
                        this.handleNextWeek(result.dates);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: {
                                startDate: format(
                                    utcToZonedTime(
                                        result.dates.startDate as Date,
                                        environment.TIMEZONE as string)
                                    , QUERY_PARAMS_DATE_FORMAT),
                                endDate: format(
                                    utcToZonedTime(
                                        result.dates.endDate as Date,
                                        environment.TIMEZONE as string,
                                    ), QUERY_PARAMS_DATE_FORMAT),
                            } as PastTrainingsQueryParams,
                        });
                    }),
                    catchError(_ => {
                        this.isError$.next(true);
                        return EMPTY;
                    }),
                    finalize(() => {
                        this.sharedService.setLoading(false);
                        this.changeDetectorRef.markForCheck();
                    }),
                ); */
    }

    setNextWeekTooltip(): Observable<string> {
        if (!this.isNextWeekDisabled) {
            return this.translateService.stream('training.past_trainings.buttons.next_week');
        }
        else {
            return this.translateService.stream('training.past_trainings.disabled_next_week');
        }
    }

    tryAgain(): void {
        this.sharedService.setLoading(true);
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                catchError(_ => EMPTY),
                finalize(() => {
                    this.sharedService.setLoading(false);
                    this.changeDetectorRef.markForCheck();
                }),
            );
    }

    setTimePeriod(dateInterval: DateInterval): Observable<string> {
        const isWeek = isSameWeek(
            dateInterval.startDate,
            dateInterval.endDate,
            { weekStartsOn: 1 },
        );
        if (isWeek) {
            return this.translateService.stream('common.week');
        }
        const isMonth = isSameMonth(
            dateInterval.startDate,
            dateInterval.endDate,
        );
        if (isMonth) {
            const month = getMonth(dateInterval.startDate);
            return this.translateService.stream('common.months').pipe(
                map((data: { [key: string]: string }) =>
                    `common.months.${Object.keys(data)[month]}`,
                ),
            );
        }
        const isYear = isSameYear(
            dateInterval.startDate,
            dateInterval.endDate,
        );
        if (isYear) {
            return this.translateService.stream('common.year');
        }
        return this.translateService.stream('common.period');
    }

    private handleNextWeek(dateInterval: DateInterval): void {
        const arrayOfDates: number[] = eachDayOfInterval({
            start: utcToZonedTime(
                dateInterval.startDate as Date,
                environment.TIMEZONE as string),
            end: utcToZonedTime(
                dateInterval.endDate as Date,
                environment.TIMEZONE as string),
        }).map((date: Date) => date.getTime() as number);
        this.isNextWeekDisabled = arrayOfDates.includes(startOfDay(new Date()).getTime() as number) as boolean;
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate: string[] = (this.route.snapshot.queryParams?.startDate as string).split('-');
        const utc: string = new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString();
        return utcToZonedTime(new Date(utc), environment.TIMEZONE as string);
    }
}
