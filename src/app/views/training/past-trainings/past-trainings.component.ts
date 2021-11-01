import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { addDays, eachDayOfInterval, format, startOfDay, subDays } from 'date-fns';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NewTraining } from '../../../models/training/new-training.model';
import { PastTrainingsResponse } from '../../../models/training/past-trainings-response.model';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@Component({
    selector: 'app-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss'],
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
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.isLoading = true;
        const dateElements: string[] = (this.route.snapshot.queryParams.startDate as string).split('-');
        this.initializePastTrainings(
            this.sharedService.subtractTwoHours(new Date(`${dateElements[2]}-${dateElements[1]}-${dateElements[0]}`))
        ).subscribe();
    }

    loadWeekTraining(previousOrNextWeek: string): void {
        this.isLoading = true;

        this.initializePastTrainings(
            previousOrNextWeek === 'Previous week'
                ? subDays(this.startDate, 7) as Date
                : addDays(this.startDate, 7) as Date,
                true
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
        const dateElements: string[] = (this.route.snapshot.queryParams.startDate as string).split('-');
        this.initializePastTrainings(
            this.sharedService.subtractTwoHours(new Date(`${dateElements[2]}-${dateElements[1]}-${dateElements[0]}`))
        ).subscribe();
    }

    private initializePastTrainings(
        orientationDate: Date,
        isArrow?: boolean
    ): Observable<PastTrainingsResponse> {
        return this.pastTrainingsService.getPastTrainings(orientationDate as Date).pipe(
            tap((result: PastTrainingsResponse) => {
                this.startDate = this.sharedService.subtractTwoHours(result.dates.startDate) as Date;
                this.endDate = this.sharedService.subtractTwoHours(result.dates.endDate) as Date;
                this.trainings$ = of(result.trainings as NewTraining[]);
                this.trainingsPerPage = +result.trainingsPerPage as number;
                this.disableNextWeek();
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
                            startDate: format(this.startDate, 'dd-MM-yyyy'),
                            endDate: format(this.endDate, 'dd-MM-yyyy')
                        }
                    });
                }
            })
        );
    }

    private disableNextWeek(): void {
        const arrayOfDates: number[] = eachDayOfInterval({
            start: this.startDate,
            end: this.endDate
        }).map(date => date.getTime());
        this.isNextWeekDisabled = arrayOfDates.includes(startOfDay(new Date()).getTime() as number) as boolean;
    }
}
