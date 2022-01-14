import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, getMonth, isSameMonth, isSameWeek, isSameYear, startOfDay, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { TrainingData } from '../../../models/common/interfaces/common.model';
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

    pastTrainings$: Observable<TrainingData<PastTrainingsResponse>> = undefined;

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
                        //TODO: Create shared code for operators
                        map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                            IsLoading: false,
                            Value: trainingData?.Value,
                            IsError: false,
                        })),
                        catchError(_ => of({
                            IsLoading: false,
                            IsError: true,
                        } as TrainingData<PastTrainingsResponse>)),
                        startWith({
                            IsLoading: true,
                            IsError: false,
                        } as TrainingData<PastTrainingsResponse>),
                    );
            this.changeDetectorRef.markForCheck();
        });

        const searchFilter = this.route.snapshot.queryParamMap?.get('search');
        if (searchFilter) {
            this.pastTrainings$ =
                //TODO: implement query param check on backend (security). Cuz user can type whatever manually in query params
                this.pastTrainingsService.searchPastTrainings((searchFilter as string).trim())
                    .pipe(
                        //TODO: Create shared code for operators
                        map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                            IsLoading: false,
                            Value: trainingData?.Value,
                            IsError: false,
                        })),
                        catchError(_ => of({
                            IsLoading: false,
                            IsError: true,
                        } as TrainingData<PastTrainingsResponse>)),
                        startWith({
                            IsLoading: true,
                            IsError: false,
                        } as TrainingData<PastTrainingsResponse>),
                    );
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
                .pipe(
                    tap((response: TrainingData<PastTrainingsResponse>) => this.handleNextWeek(response?.Value?.Dates)),
                    //TODO: Create shared code for operators
                    map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                        IsLoading: false,
                        Value: trainingData?.Value,
                        IsError: false,
                    })),
                    catchError(_ => of({
                        IsLoading: false,
                        IsError: true,
                    } as TrainingData<PastTrainingsResponse>)),
                    startWith({
                        IsLoading: true,
                        IsError: false,
                    } as TrainingData<PastTrainingsResponse>),
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

    searchEmitted($event: string): void {
        this.pastTrainings$ =
            of($event)
                .pipe(
                    switchMap((value: string) =>
                        this.pastTrainingsService.searchPastTrainings(value).pipe(
                            tap(async (trainingData: TrainingData<PastTrainingsResponse>) => {
                                const queryParams: PastTrainingsQueryParams = {
                                    startDate: format(
                                        utcToZonedTime(
                                            trainingData?.Value?.Dates?.StartDate as Date,
                                            environment.TIMEZONE as string)
                                        , QUERY_PARAMS_DATE_FORMAT),
                                    endDate: format(
                                        utcToZonedTime(
                                            trainingData?.Value?.Dates?.EndDate as Date,
                                            environment.TIMEZONE as string,
                                        ), QUERY_PARAMS_DATE_FORMAT),
                                    search: $event.trim() !== '' ? $event.trim() : undefined,
                                };
                                await this.router.navigate([], {
                                    relativeTo: this.route,
                                    queryParams: queryParams,
                                });
                            }),
                            //TODO: Create shared code for operators
                            map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                                IsLoading: false,
                                Value: trainingData?.Value,
                                IsError: false,
                            })),
                            catchError(_ => of({
                                IsLoading: false,
                                IsError: true,
                            } as TrainingData<PastTrainingsResponse>)),
                            startWith({
                                IsLoading: true,
                                IsError: false,
                            } as TrainingData<PastTrainingsResponse>),
                        ),
                    ),
                );
    }

    loadWeekTraining(
        previousOrNextWeek: Week,
        dateInterval: DateInterval,
    ): void {
        this.pastTrainings$ =
            this.pastTrainingsService.getPastTrainings(previousOrNextWeek === 'Previous week'
                ? subDays(
                    utcToZonedTime(
                        dateInterval.StartDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date
                : addDays(
                    utcToZonedTime(
                        dateInterval.StartDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date)
                .pipe(
                    tap(async (result: TrainingData<PastTrainingsResponse>) => {
                        const trainingData = result?.Value;
                        this.handleNextWeek(result?.Value?.Dates);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: {
                                startDate: format(
                                    utcToZonedTime(
                                        trainingData?.Dates?.StartDate as Date,
                                        environment.TIMEZONE as string)
                                    , QUERY_PARAMS_DATE_FORMAT),
                                endDate: format(
                                    utcToZonedTime(
                                        trainingData?.Dates?.EndDate as Date,
                                        environment.TIMEZONE as string,
                                    ), QUERY_PARAMS_DATE_FORMAT),
                            } as PastTrainingsQueryParams,
                        });
                    }),
                    //TODO: Create shared code for operators
                    map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                        IsLoading: false,
                        Value: trainingData?.Value,
                        IsError: false,
                    })),
                    catchError(_ => of({
                        IsLoading: false,
                        IsError: true,
                    } as TrainingData<PastTrainingsResponse>)),
                    startWith({
                        IsLoading: true,
                        IsError: false,
                    } as TrainingData<PastTrainingsResponse>),
                );
    }

    setNextWeekTooltip(): Observable<string> {
        return this.translateService.stream(`training.past_trainings.${!this.isNextWeekDisabled ? 'buttons.next_week' : 'disabled_next_week'}`);
    }

    tryAgain(): void {
        //TODO: Create shared code for operators
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                    IsLoading: false,
                    Value: trainingData?.Value,
                    IsError: false,
                })),
                catchError(_ => of({
                    IsLoading: false,
                    IsError: true,
                } as TrainingData<PastTrainingsResponse>)),
                startWith({
                    IsLoading: true,
                    IsError: false,
                } as TrainingData<PastTrainingsResponse>),
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
            return this.translateService.stream('common.months').pipe(
                map((data: { [key: string]: string }) =>
                    `common.months.${Object.keys(data)[month]}`,
                ),
            );
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

    private handleNextWeek(dateInterval: DateInterval): void {
        const arrayOfDates: number[] = eachDayOfInterval({
            start: utcToZonedTime(
                dateInterval.StartDate as Date,
                environment.TIMEZONE as string),
            end: utcToZonedTime(
                dateInterval.EndDate as Date,
                environment.TIMEZONE as string),
        }).map((date: Date) => date.getTime() as number);
        this.isNextWeekDisabled = arrayOfDates.includes(startOfDay(new Date()).getTime() as number) as boolean;
        this.changeDetectorRef.markForCheck();
    }

    private getDateTimeQueryParams(): Date {
        const splittedDate: string[] = (this.route.snapshot.queryParams?.startDate as string).split('-');
        const utc: string = new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString();
        return utcToZonedTime(new Date(utc), environment.TIMEZONE as string);
    }
}
