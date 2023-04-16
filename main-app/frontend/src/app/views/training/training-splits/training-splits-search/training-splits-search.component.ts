import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bl-training-splits-search',
    templateUrl: './training-splits-search.component.html',
    styleUrls: ['./training-splits-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingSplitsSearchComponent {
    readonly INPUT_DEBOUNCE = 500;

    @Output()
    createTrainingSplitEvent = new EventEmitter<void>();

    @Output()
    searchChange = new EventEmitter<string>();

    createTrainingSplit(): void {
        this.createTrainingSplitEvent.emit();
    }

    onSearchChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value.toLowerCase();
        this.searchChange.emit(value);
    }
}
