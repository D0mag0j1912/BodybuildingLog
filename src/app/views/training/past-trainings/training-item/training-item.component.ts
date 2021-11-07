import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { environment } from '../../../../../environments/environment';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';

const MAX_EXERCISE_NAME_WIDTH: number = 200;

@Component({
    selector: 'app-training-item',
    templateUrl: './training-item.component.html',
    styleUrls: ['./training-item.component.scss'],
})
export class TrainingItemComponent implements OnInit {

    timeCreated: string;

    readonly weekDays: ReadonlyArray<string> = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];

    readonly actions: ReadonlyArray<TrainingItemActions> = [
        'delete',
        'more'
    ];

    dayIndex: number;

    isTooltipDisabled: boolean = true;

    @Input()
    training: NewTraining;

    @ViewChildren('exerciseNameEl', {
        read: ElementRef
    })
    set exerciseNameEls(exerciseNames: QueryList<ElementRef>){
        if(exerciseNames){
            setTimeout(() => {
                exerciseNames.forEach((exerciseName: ElementRef) => {
                    if((exerciseName.nativeElement as HTMLSpanElement)?.offsetWidth > MAX_EXERCISE_NAME_WIDTH || this.training.exercise.length > 2){
                        this.isTooltipDisabled = false;
                    }
                    else {
                        this.isTooltipDisabled = true;
                    }
                });
            });
        }
    }

    constructor(
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        console.log(this.training.createdAt)
        console.log(utcToZonedTime(this.training.createdAt, environment.TIMEZONE))
        this.timeCreated = format(
            utcToZonedTime(
                this.training.createdAt as Date,
                environment.TIMEZONE as string)
            , 'HH:mm');
        this.dayIndex = utcToZonedTime(
            this.training.createdAt as Date,
            environment.TIMEZONE as string).getDay();
    }

    async trainingClicked(): Promise<void> {
        await this.router.navigate(['/new-training', this.training._id]);
    }

}
