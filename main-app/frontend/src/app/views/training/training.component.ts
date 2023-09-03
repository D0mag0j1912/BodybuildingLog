import { Component, OnInit } from '@angular/core';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { delay, map, startWith, withLatestFrom } from 'rxjs/operators';
import { QUERY_PARAMS_DATE_FORMAT } from '../../constants/training/past-trainings-date-format.const';
import { PreferencesStoreService } from '../../services/store/shared/preferences-store.service';
import { PreferencesDto as Preferences } from '../../../api/models/preferences-dto';
import { PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';
import { encodeFilter } from '../../helpers/encode-decode.helper';
import { PastTrainingsFacadeService } from '../../store/past-trainings/past-trainings-facade.service';
import { TrainingsCommonFacadeService } from '../../store/trainings-common/trainings-common-facade.service';

@Component({
    selector: 'bl-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
    pastTrainingsFilter$ = this._pastTrainingsFacadeService.selectPastTrainingsFilter().pipe(
        delay(0),
        startWith(''),
        withLatestFrom(this._preferencesStoreService.preferencesChanged$),
        map(([filter, preferences]: [string, Preferences]) => {
            if (filter) {
                return filter;
            } else {
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
                return encodeFilter(queryParams);
            }
        }),
    );

    constructor(
        private _preferencesStoreService: PreferencesStoreService,
        private _pastTrainingsFacadeService: PastTrainingsFacadeService,
        private _trainingsCommonFacadeService: TrainingsCommonFacadeService,
    ) {}

    ngOnInit(): void {
        this._trainingsCommonFacadeService.getExercises();
    }

    saveFilter(filter: string): void {
        this._pastTrainingsFacadeService.saveFilter(filter);
    }
}
