import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
