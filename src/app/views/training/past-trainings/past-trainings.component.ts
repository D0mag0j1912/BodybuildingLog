import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, startOfDay, subDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Observable, of } from 'rxjs';
import { catchError, finalize, takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { environment } from '../../../../environments/environment';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings-response.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@Component({
    selector: 'app-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
    providers: [UnsubscribeService],
})
export class PastTrainingsComponent implements OnInit {

    food: number = 3000;

    isLoading: boolean = false;
    isError: boolean = false;
    isNextWeekDisabled: boolean = true;

    startDate: Date;
    endDate: Date;

    trainingsPerPage: number;

    trainings$: Observable<NewTraining[]>;

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) {
        this.sharedService.deletedTraining$$.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((response: PastTrainingsResponse) => {
            this.fillTemplateVariables(response);
        });
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.initializePastTrainings(this.getLocalDateTime()).subscribe();
    }

    loadWeekTraining(previousOrNextWeek: string): void {
        this.isLoading = true;

        this.initializePastTrainings(
            previousOrNextWeek === 'Previous week'
                ? subDays(
                    utcToZonedTime(
                        this.startDate as Date,
                        environment.TIMEZONE as string,
                    )
                    , 7) as Date
                : addDays(
                    utcToZonedTime(
                        this.startDate as Date,
                        environment.TIMEZONE as string,
                    ), 7) as Date,
                true,
        ).subscribe();
    }

    setNextWeekTooltip(): Observable<string> {
        if(!this.isNextWeekDisabled){
            return this.translateService.stream('training.past_trainings.buttons.next_week');
        }
        else {
            return this.translateService.stream('training.past_trainings.disabled_next_week');
        }
    }

    tryAgain(): void {
        this.isLoading = true;
        this.initializePastTrainings(this.getLocalDateTime()).subscribe();
    }

    private initializePastTrainings(
        orientationDate: Date,
        isArrow?: boolean,
    ): Observable<PastTrainingsResponse> {
        return this.pastTrainingsService.getPastTrainings(orientationDate as Date).pipe(
            tap((result: PastTrainingsResponse) => {
                this.fillTemplateVariables(result);
            }),
            catchError(_ => {
                this.isError = true;
                return of(null);
            }),
            finalize(async () => {
                this.isLoading = false;

                if(isArrow){
                    await this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: {
                            startDate: format(
                                utcToZonedTime(
                                    this.startDate as Date,
                                    environment.TIMEZONE as string)
                                , 'dd-MM-yyyy'),
                            endDate: format(
                                utcToZonedTime(
                                    this.endDate as Date,
                                    environment.TIMEZONE as string,
                                ), 'dd-MM-yyyy'),
                        },
                    });
                }
            }),
        );
    }

    private fillTemplateVariables(response: PastTrainingsResponse): void {
        this.startDate = utcToZonedTime(
            response.dates.startDate as Date,
            environment.TIMEZONE as string) as Date;
        this.endDate = utcToZonedTime(
            response.dates.endDate as Date,
            environment.TIMEZONE as string) as Date;
        this.trainings$ = of(response.trainings as NewTraining[]);
        this.trainingsPerPage = +response.trainingsPerPage as number;
        this.disableNextWeek();
    }

    private disableNextWeek(): void {
        const arrayOfDates: number[] = eachDayOfInterval({
            start: utcToZonedTime(
                this.startDate as Date,
                environment.TIMEZONE as string),
            end: utcToZonedTime(
                this.endDate as Date,
                environment.TIMEZONE as string),
        }).map((date: Date) => date.getTime() as number);
        this.isNextWeekDisabled = arrayOfDates.includes(startOfDay(new Date()).getTime() as number) as boolean;
    }

    private getLocalDateTime(): Date {
        const splittedDate = (this.route.snapshot.queryParams.startDate as string).split('-');
        const utc: string = new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`).toUTCString();
        return utcToZonedTime(new Date(utc), environment.TIMEZONE as string);
    }
}
