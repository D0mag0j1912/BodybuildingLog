import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
    Input,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
    selector: 'bl-training-splits-search',
    templateUrl: './training-splits-search.component.html',
    styleUrls: ['./training-splits-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingSplitsSearchComponent implements AfterViewInit {
    @ViewChild('searchbar')
    searchBar: IonSearchbar;

    @Output()
    createTrainingSplitEvent = new EventEmitter<void>();

    @Output()
    searchChange = new EventEmitter<Event>();

    @Input()
    value = '';

    ngAfterViewInit(): void {
        setTimeout(async () => await this.searchBar?.setFocus(), 150);
    }

    createTrainingSplit(): void {
        this.createTrainingSplitEvent.emit();
    }

    onSearchChange(event: Event): void {
        this.searchChange.emit(event);
    }
}
