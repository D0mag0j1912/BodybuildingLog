import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, getMonth, isSameMonth, isSameWeek, isSameYear, startOfDay, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { asyncScheduler, Observable, of } from 'rxjs';
import { catchError, delay, finalize, map, observeOn, startWith, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { SearchQuery } from '../../../models/common/interfaces/common.model';
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
                        map((x: TrainingData<PastTrainingsResponse>) => ({
                            isLoading: false,
                            value: x?.value,
                            isError: false,
                        } as TrainingData<PastTrainingsResponse>)),
                        catchError(_ => of({
                            isLoading: false,
                            isError: true,
                        } as TrainingData<PastTrainingsResponse>)),
                        startWith({
                            isLoading: true,
                            isError: false,
                        } as TrainingData<PastTrainingsResponse>),
                    );
        });

        const searchFilter = this.route.snapshot.queryParamMap?.get('search');
        if (searchFilter) {
            this.pastTrainings$ =
                //TODO: implement query param check on backend (security). Cuz user can type whatever manually in query params
                this.pastTrainingsService.searchPastTrainings((searchFilter as string).trim())
                    .pipe(
                        map((response: TrainingData<PastTrainingsResponse>) => ({
                            isLoading: false,
                            value: response.value,
                            isError: false,
                        } as TrainingData<PastTrainingsResponse>)),
                        catchError(_ => of({
                            isLoading: false,
                            isError: true,
                        } as TrainingData<PastTrainingsResponse>)),
                        startWith({
                            isLoading: true,
                            isError: false,
                        } as TrainingData<PastTrainingsResponse>),
                    );
        }
        else {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
                .pipe(
                    tap((response: TrainingData<PastTrainingsResponse>) => this.handleNextWeek(response?.value?.dates)),
                    map((response: TrainingData<PastTrainingsResponse>) => ({
                        isLoading: false,
                        value: response.value,
                        isError: false,
                    } as TrainingData<PastTrainingsResponse>)),
                    catchError(_ => of({
                        isLoading: false,
                        isError: true,
                    } as TrainingData<PastTrainingsResponse>)),
                    startWith({
                        isLoading: true,
                        isError: false,
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

    //TODO: implement loading spinner while searching
    searchEmitted($event: SearchQuery<TrainingData<PastTrainingsResponse>>): void {
        const x = $event?.data;
        this.pastTrainings$ =
            of(null)
                .pipe(
                    tap(async () => {
                        const queryParams: PastTrainingsQueryParams = {
                            startDate: format(
                                utcToZonedTime(
                                    x?.value?.dates?.startDate as Date,
                                    environment.TIMEZONE as string)
                                , QUERY_PARAMS_DATE_FORMAT),
                            endDate: format(
                                utcToZonedTime(
                                    x?.value?.dates?.endDate as Date,
                                    environment.TIMEZONE as string,
                                ), QUERY_PARAMS_DATE_FORMAT),
                            search: $event?.searchValue !== '' ? $event.searchValue : undefined,
                        };
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: queryParams,
                        });
                    }),
                    map(_ => ({
                        isLoading: false,
                        value: x?.value,
                        isError: false,
                    })),
                    catchError(_ => of({
                        isLoading: false,
                        isError: true,
                    } as TrainingData<PastTrainingsResponse>)),
                    startWith({
                        isLoading: true,
                        isError: false,
                    } as TrainingData<PastTrainingsResponse>),
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
                        dateInterval.startDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date
                : addDays(
                    utcToZonedTime(
                        dateInterval.startDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date)
                .pipe(
                    tap(async (result: TrainingData<PastTrainingsResponse>) => {
                        const trainingData = result?.value;
                        this.handleNextWeek(result?.value?.dates);
                        await this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: {
                                startDate: format(
                                    utcToZonedTime(
                                        trainingData?.dates?.startDate as Date,
                                        environment.TIMEZONE as string)
                                    , QUERY_PARAMS_DATE_FORMAT),
                                endDate: format(
                                    utcToZonedTime(
                                        trainingData?.dates?.endDate as Date,
                                        environment.TIMEZONE as string,
                                    ), QUERY_PARAMS_DATE_FORMAT),
                            } as PastTrainingsQueryParams,
                        });
                    }),
                    map((x: TrainingData<PastTrainingsResponse>) => ({
                        isLoading: false,
                        value: x?.value,
                        isError: false,
                    })),
                    catchError(_ => of({
                        isLoading: false,
                        isError: true,
                    } as TrainingData<PastTrainingsResponse>)),
                    startWith({
                        isLoading: true,
                        isError: false,
                    } as TrainingData<PastTrainingsResponse>),
                );
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
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                map((x: TrainingData<PastTrainingsResponse>) => ({
                    isLoading: false,
                    value: x?.value,
                    isError: false,
                })),
                catchError(_ => of({
                    isLoading: false,
                    isError: true,
                } as TrainingData<PastTrainingsResponse>)),
                startWith({
                    isLoading: true,
                    isError: false,
                } as TrainingData<PastTrainingsResponse>),
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
