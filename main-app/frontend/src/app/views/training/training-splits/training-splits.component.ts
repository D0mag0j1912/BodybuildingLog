import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
})
export class TrainingSplitsComponent implements OnInit {
    trainingSplits$ = this._trainingSplitsFacadeService.getTrainingSplitListSelector();

    constructor(
        private _trainingSplitsFacadeService: TrainingSplitsFacadeService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this._trainingSplitsFacadeService.getTrainingSplitList();
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
}
