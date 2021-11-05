import { Component, Input } from '@angular/core';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import { DeleteTrainingActionService } from 'src/app/services/training/training-actions/delete-training-action.service';
import { DeleteTrainingActionData } from '../../../../../services/training/training-actions/delete-training-action.service';
import { TrainingItemActions } from '../training-item.component';

@Component({
    selector: 'app-training-item-actions',
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

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ){}

    performAction(action: TrainingItemActions): void {
        const data: DeleteTrainingActionData = {
            weekDays: this.weekDays as ReadonlyArray<string>,
            dayIndex: this.dayIndex as number,
            training: this.training as NewTraining
        };
        switch(action) {
            case 'delete':
                this.deleteTrainingActionService.perform(data);
        }
    }
}
