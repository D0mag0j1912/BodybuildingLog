import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TrainingSplitDto as TrainingSplit } from '../../../../../api/models/training-split-dto';

@Component({
    selector: 'bl-training-split',
    templateUrl: './training-split.component.html',
    styleUrls: ['./training-split.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingSplitComponent {
    @Input()
    trainingSplit: TrainingSplit;

    @Input()
    isFirst = false;

    @Output()
    editTrainingSplit = new EventEmitter<TrainingSplit>();

    @Output()
    deleteTrainingSplit = new EventEmitter<string>();

    onEdit(): void {
        this.editTrainingSplit.emit(this.trainingSplit);
    }

    onDelete(): void {
        this.deleteTrainingSplit.emit(this.trainingSplit._id);
    }

    useTrainingSplit(): void {}
}
