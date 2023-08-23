import { Component, Input } from '@angular/core';
import { ModalController, SegmentChangeEventDetail } from '@ionic/angular';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';
import { MUSCLE_GROUPS } from '../../../../constants/training/muscle-groups.const';
import { MuscleGroupsType } from '../../../../models/common/muscle-groups.type';
import {
    PastTrainingsQueryParams,
    PeriodFilterType,
} from '../../../../models/training/past-trainings/past-trainings.model';

@Component({
    selector: 'bl-past-trainings-filters-dialog',
    templateUrl: './past-trainings-filters-dialog.component.html',
    styleUrls: ['./past-trainings-filters-dialog.component.scss'],
})
export class PastTrainingsFiltersDialogComponent {
    @Input()
    periodFilter: PeriodFilterType = 'week';

    @Input()
    periodDisabled = false;

    readonly muscleGroups = MUSCLE_GROUPS;

    selectedMuscleGroups: MuscleGroupsType[] = [];

    sortOptions: [
        KeyValue<PeriodFilterType, Observable<string>>,
        KeyValue<PeriodFilterType, Observable<string>>,
    ] = [
        {
            key: 'week',
            value: this._translateService.stream('training.past_trainings.show_by_week'),
        },
        {
            key: 'day',
            value: this._translateService.stream('training.past_trainings.show_by_day'),
        },
    ];

    constructor(
        private _modalController: ModalController,
        private _translateService: TranslateService,
    ) {}

    clearFilters(): void {
        this.selectedMuscleGroups = [];
    }

    async applyFilters(): Promise<void> {
        const filtersData: Partial<PastTrainingsQueryParams> = {
            showBy: this.periodFilter,
            muscleGroups: this.selectedMuscleGroups,
        };
        await this._modalController.dismiss(filtersData, DialogRoles.FILTER_TRAININGS);
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }

    segmentChanged($event: CustomEvent<SegmentChangeEventDetail>): void {
        this.periodFilter = $event?.detail?.value as PeriodFilterType;
    }
}
