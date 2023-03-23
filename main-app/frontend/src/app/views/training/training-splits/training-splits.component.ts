import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';
import { StreamData } from '../../../models/common/common.model';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
    providers: [UnsubscribeService],
})
export class TrainingSplitsComponent implements OnInit {
    trainingSplits$ = this._trainingSplitsFacadeService.getTrainingSplitListSelector().pipe(
        map((response: StreamData<TrainingSplit[]>) => ({
            ...response,
            Value: response.Value,
        })),
    );

    constructor(
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _unsubscribeService: UnsubscribeService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this._trainingSplitsFacadeService.getTrainingSplitList();
    }

    async createTrainingSplit(): Promise<void> {
        const modal = await this._modalController.create({
            component: CreateTrainingSplitComponent,
            keyboardClose: true,
        });

        await modal.present();

        from(modal.onDidDismiss()).pipe(takeUntil(this._unsubscribeService)).subscribe();
    }
}
