import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as PastTrainingsActions from '../actions/past-trainings.actions';
import { PastTrainingsFacadeService } from '../past-trainings-facade.service';
import { SwaggerPastTrainingsService } from '../../../../api';
import * as CommonActions from '../../common/actions/common.actions';

@Injectable()
export class PastTrainingsEffects {
    getPastTrainings$ = createEffect(() =>
        this._actions$.pipe(
            ofType(PastTrainingsActions.getPastTrainings),
            tap((_) => this._pastTrainingsFacadeService.setLoading(true)),
            switchMap((action) =>
                this._swaggerPastTrainingsService
                    .pastTrainingsControllerGetPastTrainings({
                        currentDate: action.payload.currentDate?.toString(),
                        periodFilterType: action.payload.periodFilterType,
                        page: action.payload.searchData?.page,
                        perPage: action.payload.searchData?.perPage,
                        searchText: action.payload.searchData?.searchText,
                        muscleGroups: action.payload.muscleGroups,
                    })
                    .pipe(
                        catchError((_) => {
                            CommonActions.showToastMessage({
                                color: 'danger',
                                message: 'training.past_trainings.errors.get_past_trainings',
                            });
                            this._pastTrainingsFacadeService.setLoading(false);
                            return EMPTY;
                        }),
                        map((response) => {
                            this._pastTrainingsFacadeService.setLoading(false);
                            return PastTrainingsActions.setPastTrainings({ response });
                        }),
                    ),
            ),
        ),
    );

    deleteTraining$ = createEffect(() =>
        this._actions$.pipe(
            ofType(PastTrainingsActions.deleteTraining),
            concatMap((action) =>
                this._swaggerPastTrainingsService
                    .deleteTrainingActionControllerDeleteTraining({ id: action.trainingId })
                    .pipe(
                        catchError(() => {
                            CommonActions.showToastMessage({
                                color: 'danger',
                                message: 'training.past_trainings.errors.error_delete_training',
                            });
                            return EMPTY;
                        }),
                        map(() => PastTrainingsActions.deleteTrainingSuccess()),
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
