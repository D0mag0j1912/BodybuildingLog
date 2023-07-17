import { Component } from '@angular/core';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { QUERY_PARAMS_DATE_FORMAT } from '../../constants/training/past-trainings-date-format.const';
import { PreferencesStoreService } from '../../services/store/shared/preferences-store.service';

@Component({
    selector: 'bl-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
    showByPeriod = this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
    startDate = format(
        startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 }),
        QUERY_PARAMS_DATE_FORMAT,
    );
    endDate = format(
        this.showByPeriod === 'week'
            ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 })
            : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 }),
        QUERY_PARAMS_DATE_FORMAT,
    );
    constructor(private _preferencesStoreService: PreferencesStoreService) {}
}
