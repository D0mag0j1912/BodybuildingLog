import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
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
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        'saturday',
    ];

    readonly actions: ReadonlyArray<TrainingItemActions> = [
        'delete',
        'more',
    ];

    dayIndex: number;

    isTooltipDisabled: boolean = true;

    @Input()
    training: NewTraining;

    @ViewChildren('exerciseNameEl', {
        read: ElementRef,
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
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    constructor(
        private readonly router: Router,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        //TODO: vrijeme ovdje ide 2 sata unaprijed
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
