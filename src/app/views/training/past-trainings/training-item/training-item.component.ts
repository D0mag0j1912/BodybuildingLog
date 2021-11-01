import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NewTraining } from '../../../../models/training/new-training.model';

const MAX_EXERCISE_NAME_WIDTH: number = 200;

export type TrainingItemActions = 'delete' | 'more';

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
        private readonly sharedService: SharedService,
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        this.timeCreated = format(this.sharedService.subtractTwoHours(new Date(this.training.createdAt as Date)), 'HH:mm');
        this.dayIndex = this.sharedService.subtractTwoHours(this.training.createdAt as Date).getDay();
    }

    async trainingClicked(): Promise<void> {
        await this.router.navigate(['/new-training', this.training._id]);
    }

}
