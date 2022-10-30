import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../../constants/enums/model-roles.enum';

@Component({
    selector: 'bl-change-set-category',
    templateUrl: './change-set-category.component.html',
    styleUrls: ['./change-set-category.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeSetCategoryComponent {
    constructor(private _modalController: ModalController) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
