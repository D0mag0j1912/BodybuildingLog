import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
    providers: [UnsubscribeService],
})
export class TrainingSplitsComponent implements OnInit {
    private _searchChanged$ = new Subject<Event>();
    trainingSplits$ = this._trainingSplitsFacadeService.getTrainingSplitListSelector();

    constructor(
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _unsubscribeService: UnsubscribeService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this._trainingSplitsFacadeService.getTrainingSplitList();

        this._searchChanged$
            .pipe(
                map((event: Event) => (event.target as HTMLInputElement).value),
                map((value: string) => value?.trim().toLowerCase()),
                filter((value: string) => value.length <= 50),
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((value: string) =>
                this._trainingSplitsFacadeService.searchTrainingSplits(value),
            );
    }

    async openTrainingSplitModal(trainingSplit: TrainingSplit = null): Promise<void> {
        const modal = await this._modalController.create({
            component: CreateTrainingSplitComponent,
            componentProps: {
                trainingSplit,
            },
            keyboardClose: true,
        });

        await modal.present();
    }

    onDeleteTrainingSplit(trainingSplitId: string): void {
        this._trainingSplitsFacadeService.deleteTrainingSplit(trainingSplitId);
    }

    onSearchChange($event: Event): void {
        this._searchChanged$.next($event);
    }
}
