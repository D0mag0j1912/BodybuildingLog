import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { MUSCLE_GROUPS } from '../../../../constants/training/muscle-groups.const';
import { MuscleGroupsType } from '../../../../models/common/muscle-groups.type';
import { PastTrainingsQueryParams } from '../../../../models/training/past-trainings/past-trainings.model';

@Component({
    selector: 'bl-past-trainings-filters-dialog',
    templateUrl: './past-trainings-filters-dialog.component.html',
    styleUrls: ['./past-trainings-filters-dialog.component.scss'],
})
export class PastTrainingsFiltersDialogComponent {
    readonly muscleGroups = MUSCLE_GROUPS;

    selectedMuscleGroups: MuscleGroupsType[] = [];

    constructor(private _modalController: ModalController) {}

    clearFilters(): void {
        this.selectedMuscleGroups = [];
    }

    async applyFilters(): Promise<void> {
        const filtersData: Partial<PastTrainingsQueryParams> = {
            muscleGroups: this.selectedMuscleGroups,
        };
        await this._modalController.dismiss(filtersData, DialogRoles.FILTER_TRAININGS);
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
