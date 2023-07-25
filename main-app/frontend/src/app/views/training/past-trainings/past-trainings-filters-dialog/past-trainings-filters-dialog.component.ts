import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { MUSCLE_GROUPS } from '../../../../constants/training/muscle-groups.const';

@Component({
    selector: 'bl-past-trainings-filters-dialog',
    templateUrl: './past-trainings-filters-dialog.component.html',
    styleUrls: ['./past-trainings-filters-dialog.component.scss'],
})
export class PastTrainingsFiltersDialogComponent {
    readonly muscleGroups = MUSCLE_GROUPS;
    constructor(private _modalController: ModalController) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
