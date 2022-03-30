import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Training } from 'src/app/models/training/new-training/new-training.model';
import { DeleteTrainingActionService } from 'src/app/services/training/training-actions/delete-training-action.service';
import { TrainingItemActions } from '../../../../../models/training/past-trainings/training-actions/training-actions.model';
import { DeleteTrainingActionData } from '../../../../../models/training/past-trainings/training-actions/training-actions.model';

@Component({
    selector: 'bl-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingItemActionsComponent {

    @Input()
    action: TrainingItemActions;

    @Input()
    training: Training;

    @Input()
    dayIndex: number;

    @Input()
    weekDays: string[];

    @Input()
    timeCreated: string;

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ) { }

    async performAction(action: TrainingItemActions): Promise<void> {
        const data: DeleteTrainingActionData = {
            weekDays: this.weekDays,
            timeCreated: this.timeCreated,
            dayIndex: this.dayIndex,
            training: this.training,
        };
        switch (action) {
            case 'delete':
                await this.deleteTrainingActionService.perform(data);
        }
    }
}
