import { Component, Input } from '@angular/core';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import { DeleteTrainingActionService } from 'src/app/services/training/training-actions/delete-training-action.service';
import { TrainingItemActions } from '../../../../../models/training/past-trainings/training-actions/training-actions.model';
import { DeleteTrainingActionData } from '../../../../../models/training/past-trainings/training-actions/training-actions.model';

@Component({
    selector: 'bl-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
})
export class TrainingItemActionsComponent {

    @Input()
    action: TrainingItemActions;

    @Input()
    training: NewTraining;

    @Input()
    dayIndex: number;

    @Input()
    weekDays: ReadonlyArray<string>;

    @Input()
    timeCreated: string;

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ){}

    performAction(action: TrainingItemActions): void {
        const data: DeleteTrainingActionData = {
            weekDays: this.weekDays as ReadonlyArray<string>,
            timeCreated: this.timeCreated as string,
            dayIndex: this.dayIndex as number,
            training: this.training as NewTraining,
        };
        switch(action) {
            case 'delete':
                this.deleteTrainingActionService.perform(data);
        }
    }
}
