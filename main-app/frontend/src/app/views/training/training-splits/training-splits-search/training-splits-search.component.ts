import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bl-training-splits-search',
    templateUrl: './training-splits-search.component.html',
    styleUrls: ['./training-splits-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingSplitsSearchComponent {
    @Output()
    createTrainingSplitEvent = new EventEmitter<void>();

    createTrainingSplit(): void {
        this.createTrainingSplitEvent.emit();
    }
}
