import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TRAINING_SPLIT_LIST } from '../../../mock/training-split.mock';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';

@Component({
    selector: 'bl-training-splits',
    templateUrl: './training-splits.component.html',
    styleUrls: ['./training-splits.component.scss'],
    providers: [UnsubscribeService],
})
export class TrainingSplitsComponent {
    trainingSplits$ = of(TRAINING_SPLIT_LIST);

    constructor(
        private _modalController: ModalController,
        private _unsubscribeService: UnsubscribeService,
    ) {}

    async createTrainingSplit(): Promise<void> {
        const modal = await this._modalController.create({
            component: CreateTrainingSplitComponent,
            keyboardClose: true,
        });

        await modal.present();

        from(modal.onDidDismiss()).pipe(takeUntil(this._unsubscribeService)).subscribe();
    }
}
