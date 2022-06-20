import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { Training } from '../../../../models/training/new-training/training.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';

@Component({
    selector: 'bl-training-item',
    templateUrl: './training-item.component.html',
    styleUrls: ['./training-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingItemComponent implements OnInit {

    readonly weekDays: string[] = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];

    readonly actions: TrainingItemActions[] = [
        'delete',
        'more',
    ];

    timeCreated: string;
    dayIndex: number;

    @Input()
    training: Training;

    constructor(
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.timeCreated = format(new Date(this.training.trainingDate), 'HH:mm');
        this.dayIndex = new Date(this.training.trainingDate).getDay();
    }

    async trainingClicked(): Promise<void> {
        await this.router.navigate(['/training/new-training', this.training._id]);
    }

}
