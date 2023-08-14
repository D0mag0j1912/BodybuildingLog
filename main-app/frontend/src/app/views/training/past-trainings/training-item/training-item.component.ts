import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { format } from 'date-fns';
import { NewTrainingDto as NewTraining } from '../../../../../api/models/new-training-dto';
import {
    DeleteTrainingActionData,
    TrainingActionPerformed,
    TrainingItemActions,
} from '../../../../models/training/past-trainings/training-actions/training-actions.model';

@Component({
    selector: 'bl-training-item',
    templateUrl: './training-item.component.html',
    styleUrls: ['./training-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingItemComponent {
    readonly weekDays: string[] = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];

    readonly actions: TrainingItemActions[] = ['delete'];

    timeCreated: string;
    dayIndex: number;

    @Input()
    set training(training: NewTraining) {
        this._training = training;
        this.timeCreated = format(new Date(training.trainingDate), 'HH:mm');
        this.dayIndex = new Date(training.trainingDate).getDay();
    }
    get training(): NewTraining {
        return this._training;
    }
    private _training: NewTraining;

    @Output()
    trainingItemClicked = new EventEmitter<void>();

    @Output()
    trainingActionPerformed = new EventEmitter<TrainingActionPerformed<DeleteTrainingActionData>>();

    trainingClicked(): void {
        this.trainingItemClicked.emit();
    }

    onTrainingActionPerformed(data: TrainingActionPerformed<DeleteTrainingActionData>): void {
        this.trainingActionPerformed.emit(data);
    }
}
