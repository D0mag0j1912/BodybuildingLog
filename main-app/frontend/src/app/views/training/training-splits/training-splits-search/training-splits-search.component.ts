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

    @Output()
    searchChange = new EventEmitter<Event>();

    createTrainingSplit(): void {
        this.createTrainingSplitEvent.emit();
    }

    onSearchChange(event: Event): void {
        this.searchChange.emit(event);
    }
}
