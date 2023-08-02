import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as PastTrainingsActions from '../actions/past-trainings.actions';
import { PastTrainingsFacadeService } from '../past-trainings-facade.service';
import { SwaggerPastTrainingsService } from '../../../../api';
import * as CommonActions from '../../common/common.actions';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { mapStreamData } from '../../../helpers/training/past-trainings/map-stream-data.helper';

@Injectable()
export class PastTrainingsEffects {
    pastTrainings$ = createEffect(() =>
        this._actions$.pipe(
            ofType(PastTrainingsActions.getPastTrainings),
            tap((_) => this._pastTrainingsFacadeService.setLoading(true)),
            switchMap((action) =>
                this._swaggerPastTrainingsService
                    .pastTrainingsControllerGetPastTrainings({
                        currentDate: action.currentDate.toString(),
                        filterType: action.periodFilterType,
                    })
                    .pipe(
                        mapStreamData(),
                        catchError((_) => {
                            CommonActions.showToastMessage({
                                color: 'danger',
                                message: 'training.past_trainings.errors.get_past_trainings',
                            });
                            this._pastTrainingsFacadeService.setLoading(false);
                            return EMPTY;
                        }),
                        map((response) => mapDateInterval(response)),
                        map((response) => {
                            this._pastTrainingsFacadeService.setLoading(false);
                            return PastTrainingsActions.setPastTrainings({ response });
                        }),
                    ),
            ),
        ),
    );

    constructor(
        private _actions$: Actions,
        private _pastTrainingsFacadeService: PastTrainingsFacadeService,
        private _swaggerPastTrainingsService: SwaggerPastTrainingsService,
    ) {}
}
