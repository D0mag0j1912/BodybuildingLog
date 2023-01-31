import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
})
export class CreateTrainingSplitComponent {
    constructor(private _modalController: ModalController) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
