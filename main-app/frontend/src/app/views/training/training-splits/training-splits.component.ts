import { Component } from '@angular/core';
import { of } from 'rxjs';
import { TRAINING_SPLIT_LIST } from '../../../mock/training-split.mock';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
})
export class TrainingSplitsComponent {
    trainingSplits$ = of(TRAINING_SPLIT_LIST);
}
