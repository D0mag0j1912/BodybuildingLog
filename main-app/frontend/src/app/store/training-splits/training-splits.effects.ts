import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, combineLatest, of } from 'rxjs';
import { catchError, concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { mapStreamData } from '../../helpers/training/past-trainings/map-stream-data.helper';
import { TrainingSplitSuccessService } from '../../services/helper/training-split-success.service';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import * as CommonActions from '../common/common.actions';
import { GeneralResponseDto as GeneralResponse } from '../../../api/models/general-response-dto';
import { SwaggerTrainingSplitsService } from '../../../api/services/swagger-training-splits.service';
import { PreferencesService } from '../../services/api/preferences/preferences.service';
import * as TrainingSplitActions from './training-splits.actions';

@Injectable()
export class TrainingSplitsEffects {
    createTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.createTrainingSplit),
            concatMap((action) =>
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerCreateTrainingSplit({ body: action.trainingSplit })
                    .pipe(
                        catchError((_) => {
                            CommonActions.showToastMessage({
                                color: 'danger',
                                message:
                                    'training.training_split.errors.error_create_training_split',
                            });
                            return EMPTY;
                        }),
                        map((trainingSplit: TrainingSplit) =>
                            TrainingSplitActions.createTrainingSplitSuccess({ trainingSplit }),
                        ),
                    ),
            ),
        ),
    );

    createTrainingSplitSuccess$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TrainingSplitActions.createTrainingSplitSuccess),
                tap(() => this._trainingSplitSuccessService.closeModal()),
            ),
        { dispatch: false },
    );

    editTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.editTrainingSplit),
            concatMap((action) =>
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerUpdateTraining({
                        id: action.id,
                        body: action.trainingSplit,
                    })
                    .pipe(
                        catchError((_) => {
                            CommonActions.showToastMessage({
                                color: 'danger',
                                message: 'training.training_split.errors.error_edit_training_split',
                            });
                            return EMPTY;
                        }),
                        map((trainingSplit: TrainingSplit) =>
                            TrainingSplitActions.editTrainingSplitSuccess({ trainingSplit }),
                        ),
                    ),
            ),
        ),
    );

    editTrainingSplitSuccess$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TrainingSplitActions.editTrainingSplitSuccess),
                tap(() => this._trainingSplitSuccessService.closeModal()),
            ),
        { dispatch: false },
    );

    deleteTrainingSplit$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TrainingSplitActions.deleteTrainingSplit),
                switchMap((action) =>
                    this._swaggerTrainingSplitsService
                        .trainingSplitsControllerDeleteTrainingSplit({ id: action.trainingSplitId })
                        .pipe(
                            catchError((_) => {
                                CommonActions.showToastMessage({
                                    color: 'danger',
                                    message:
                                        'training.training_split.errors.error_delete_training_split',
                                });
                                return EMPTY;
                            }),
                        ),
                ),
            ),
        { dispatch: false },
    );

    getTrainingSplitList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.getTrainingSplitList),
            switchMap((_) =>
                this._swaggerTrainingSplitsService.trainingSplitsControllerGetTrainingSplits().pipe(
                    mapStreamData<TrainingSplit[]>(),
                    map((response) =>
                        TrainingSplitActions.getTrainingSplitListSuccess({
                            trainingSplitList: response,
                        }),
                    ),
                ),
            ),
        ),
    );

    searchTrainingSplits$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.searchTrainingSplits),
            switchMap((action) =>
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerGetTrainingSplits({ contains: action.contains })
                    .pipe(
                        mapStreamData<TrainingSplit[]>(),
                        map((response) =>
                            TrainingSplitActions.getTrainingSplitListSuccess({
                                trainingSplitList: response,
                            }),
                        ),
                    ),
            ),
        ),
    );

    setActiveTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.setTrainingSplitAsActive),
            switchMap((action) =>
                combineLatest([
                    this._preferencesService.setPreferences(
                        action.preferences,
                        action.preferenceChangedType,
                    ),
                    of(action.activeTrainingSplit),
                ]).pipe(
                    map(([message, trainingSplit]: [GeneralResponse, TrainingSplit]) =>
                        TrainingSplitActions.setTrainingSplitAsActiveSuccess({
                            activeTrainingSplit: trainingSplit,
                        }),
                    ),
                ),
            ),
        ),
    );

    dispatchTrainingSplitErrorMessage$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingSplitActions.getTrainingSplitListSuccess),
            filter((response) => response.trainingSplitList.IsError),
            map((_) =>
                CommonActions.showToastMessage({
                    color: 'danger',
                    message: 'training.training_split.errors.error_get_training_splits',
                }),
            ),
        ),
    );

    constructor(
        private _swaggerTrainingSplitsService: SwaggerTrainingSplitsService,
        private _trainingSplitSuccessService: TrainingSplitSuccessService,
        private _preferencesService: PreferencesService,
        private _actions$: Actions,
    ) {}
}
