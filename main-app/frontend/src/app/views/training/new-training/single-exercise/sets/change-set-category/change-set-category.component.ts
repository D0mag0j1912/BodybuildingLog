import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../../../constants/enums/model-roles.enum';
import { SetCategoryType } from '../../../../../../models/training/new-training/single-exercise/set/set.type';
@Component({
    selector: 'bl-change-set-category',
    templateUrl: './change-set-category.component.html',
    styleUrls: ['./change-set-category.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeSetCategoryComponent {
    @Input()
    setCategories: SetCategoryType[];

    @Input()
    setCategory: SetCategoryType;

    constructor(private _modalController: ModalController) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(null, DialogRoles.CANCEL);
    }

    async onChange(): Promise<void> {
        await this._modalController.dismiss(this.setCategory, DialogRoles.CHANGE_SET_CATEGORY);
    }
}
