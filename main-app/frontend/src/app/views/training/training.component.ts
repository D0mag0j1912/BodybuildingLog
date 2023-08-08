import { Component } from '@angular/core';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { take } from 'rxjs/operators';
import { QUERY_PARAMS_DATE_FORMAT } from '../../constants/training/past-trainings-date-format.const';
import { PreferencesStoreService } from '../../services/store/shared/preferences-store.service';
import { PreferencesDto as Preferences } from '../../../api/models/preferences-dto';
import { PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';
import { encodeFilter } from '../../helpers/encode-decode.helper';
import { PastTrainingsFacadeService } from '../../store/past-trainings/past-trainings-facade.service';

@Component({
    selector: 'bl-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
    filter: string;

    constructor(
        private _preferencesStoreService: PreferencesStoreService,
        private _pastTrainingsFacadeService: PastTrainingsFacadeService,
    ) {}

    ionViewWillEnter(): void {
        this._preferencesStoreService.preferencesChanged$
            .pipe(take(1))
            .subscribe((preferences: Preferences) => {
                const showByPeriod = preferences.showByPeriod;
                const queryParams: PastTrainingsQueryParams = {
                    startDate: format(startOfDay(new Date()), QUERY_PARAMS_DATE_FORMAT),
                    endDate: format(
                        showByPeriod === 'week'
                            ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 })
                            : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 }),
                        QUERY_PARAMS_DATE_FORMAT,
                    ),
                    showBy: showByPeriod,
                };
                this.filter = encodeFilter(queryParams);
            });
    }

    saveFilter(): void {
        this._pastTrainingsFacadeService.saveFilter(this.filter);
    }
}
