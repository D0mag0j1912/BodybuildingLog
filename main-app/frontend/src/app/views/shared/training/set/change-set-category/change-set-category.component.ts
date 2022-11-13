import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../../constants/enums/model-roles.enum';
import { SetCategoryType } from '../../../../../models/training/shared/set/set.type';
@Component({
    selector: 'bl-change-set-category',
    templateUrl: './change-set-category.component.html',
    styleUrls: ['./change-set-category.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeSetCategoryComponent implements OnInit {
    @Input()
    setCategories: SetCategoryType[];

    primarySetCategory: SetCategoryType;

    constructor(private _modalController: ModalController) {}

    ngOnInit(): void {
        this.primarySetCategory = this.setCategories[0];
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(null, DialogRoles.CANCEL);
    }

    async onChange(): Promise<void> {
        await this._modalController.dismiss(
            this.primarySetCategory,
            DialogRoles.CHANGE_SET_CATEGORY,
        );
    }
}
