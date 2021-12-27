import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { Training } from '../../../../models/training/new-training/new-training.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';
import { SharedService } from '../../../../services/shared/shared.service';

const MAX_EXERCISE_NAME_WIDTH: number = 200;

@Component({
    selector: 'bl-training-item',
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
    training: Training;

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
                });
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    constructor(
        private readonly sharedService: SharedService,
        private readonly router: Router,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        //TODO: vrijeme ovdje ide 2 sata unaprijed (uskladiti s lokalnom zonom) - Zasad samo oduzimam 2 sata
        this.timeCreated = format(
            this.sharedService.subtractTwoHours(new Date(this.training.createdAt))
            , 'HH:mm');
        this.dayIndex = this.sharedService.subtractTwoHours(new Date(this.training.createdAt)).getDay();
    }

    async trainingClicked(): Promise<void> {
        await this.router.navigate(['/training/new-training', this.training._id]);
    }

}
