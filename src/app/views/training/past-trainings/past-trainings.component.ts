import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, getMonth, isSameMonth, isSameWeek, isSameYear, startOfDay, subDays  } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, finalize, map, take, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { SPINNER_SIZE } from '../../../constants/spinner-size.const';
import { Training } from '../../../models/training/new-training/new-training.model';
import { DateInterval, PastTrainingsResponse, Week } from '../../../models/training/past-trainings/past-trainings.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@Component({
    selector: 'bl-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent  {

    food: number = 3000;

    isError: boolean = false;
    isNextWeekDisabled: boolean = true;

    //TODO: sharedService spinner
    isLoading$: Observable<boolean> = this.sharedService.isLoading$;
    pastTrainings$: Observable<PastTrainingsResponse> =
        this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                tap((response: PastTrainingsResponse) => {
                    this.sharedService.setLoading(true);
                    this.handleNextWeek(response.dates);
                }),
                catchError(_ => {
                    this.isError = true;
                    return EMPTY;
                }),
                finalize(() => {
                    this.sharedService.setLoading(false);
                    this.changeDetectorRef.markForCheck();
                }),
            );

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) {
        //TODO
        this.sharedService.deletedTraining$$.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((response: PastTrainingsResponse) => {
            this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams());
        });
    }

    get spinnerSize(): number {
        return SPINNER_SIZE;
    }

    //TODO
    searchEmitted(trainings: Training[]): void {
        /* this.trainings$ = of(trainings);
        this.changeDetectorRef.markForCheck(); */
    }

    loadWeekTraining(
        previousOrNextWeek: Week,
        dateInterval: DateInterval,
    ): void {
        this.sharedService.setLoading(true);

        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(
            previousOrNextWeek === 'Previous week'
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
                                , 'dd-MM-yyyy'),
                            endDate: format(
                                utcToZonedTime(
                                    result.dates.endDate as Date,
                                    environment.TIMEZONE as string,
                                ), 'dd-MM-yyyy'),
                        },
                    });
                }),
                catchError(_ => {
                    this.isError = true;
                    return EMPTY;
                }),
                finalize(() => {
                    this.sharedService.setLoading(false);
                    this.changeDetectorRef.markForCheck();
                }),
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
    //TODO: popraviti
    tryAgain(): void {
        /* this.sharedService.setLoading(true); */
        this.pastTrainings$ = this.pastTrainingsService.getPastTrainings(this.getDateTimeQueryParams())
            .pipe(
                tap((response: PastTrainingsResponse) => {
                    if (response) {
                        this.isError = false;
                    }
                }),
                finalize(() => {
                    /* this.sharedService.setLoading(false); */
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
        return of('');
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
