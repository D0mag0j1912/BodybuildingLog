import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTraining } from '../../../../../models/training/new-training/new-training.model';
import {
    TrainingActionPerformed,
    TrainingItemActions,
} from '../../../../../models/training/past-trainings/training-actions/training-actions.model';
import { DeleteTrainingActionData } from '../../../../../models/training/past-trainings/training-actions/training-actions.model';
import { isNeverCheck } from '../../../../../helpers/is-never-check.helper';

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
    training: NewTraining;

    @Input()
    dayIndex: number;

    @Input()
    weekDays: string[];

    @Input()
    timeCreated: string;

    @Output()
    actionPerformed = new EventEmitter<TrainingActionPerformed<DeleteTrainingActionData>>();

    performAction(action: TrainingItemActions): void {
        const data: DeleteTrainingActionData = {
            weekDays: this.weekDays,
            timeCreated: this.timeCreated,
            dayIndex: this.dayIndex,
            training: this.training,
        };
        switch (action) {
            case 'delete': {
                this.actionPerformed.emit({
                    action: 'delete',
                    data,
                });
                break;
            }
            case 'more': {
                break;
            }
            default: {
                isNeverCheck(action);
            }
        }
    }
}
