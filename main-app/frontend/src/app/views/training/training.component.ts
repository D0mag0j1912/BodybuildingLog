import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { take } from 'rxjs/operators';
import { QUERY_PARAMS_DATE_FORMAT } from '../../constants/training/past-trainings-date-format.const';
import { PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';
import { PreferencesStoreService } from '../../services/store/shared/preferences-store.service';
import { PastTrainingsStoreService } from '../../services/store/training/past-trainings-store.service';

@Component({
    selector: 'bl-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
    constructor(
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _router: Router,
    ) {}

    goToPastTrainings(): void {
        this._pastTrainingsStoreService.pastTrainingsQueryParams$
            .pipe(take(1))
            .subscribe(async (params) => {
                let queryParams: PastTrainingsQueryParams;
                if (Object.keys(params).length) {
                    queryParams = params;
                } else {
                    const showByPeriod =
                        this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
                    const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    const endDate =
                        showByPeriod === 'week'
                            ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 })
                            : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    queryParams = {
                        startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                        endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                        showBy: showByPeriod,
                    };
                }
                await this._router.navigate(['/training/tabs/past-trainings'], { queryParams });
            });
    }
}
