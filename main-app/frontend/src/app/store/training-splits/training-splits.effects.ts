import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { SwaggerTrainingSplitsService } from '../../../api';
import { mapStreamData } from '../../helpers/training/past-trainings/map-stream-data.helper';
import { TrainingSplitSuccessService } from '../../services/helper/training-split-success.service';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import * as commonActions from '../common/common.actions';
import * as trainingSplitActions from './training-splits.actions';

@Injectable()
export class TrainingSplitsEffects {
    createTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.createTrainingSplit),
            concatMap((action) =>
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerCreateTrainingSplit({ body: action.trainingSplit })
                    .pipe(
                        catchError((_) => {
                            commonActions.showToastMessage({
                                color: 'danger',
                                message:
                                    'training.training_split.errors.error_create_training_split',
                            });
                            return EMPTY;
                        }),
                        map((trainingSplit: TrainingSplit) =>
                            trainingSplitActions.createTrainingSplitSuccess({ trainingSplit }),
                        ),
                    ),
            ),
        ),
    );

    createTrainingSplitSuccess$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(trainingSplitActions.createTrainingSplitSuccess),
                tap(() => this._trainingSplitSuccessService.closeModal()),
            ),
        { dispatch: false },
    );

    editTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.editTrainingSplit),
            concatMap((action) =>
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerUpdateTraining({
                        id: action.id,
                        body: action.trainingSplit,
                    })
                    .pipe(
                        catchError((_) => {
                            commonActions.showToastMessage({
                                color: 'danger',
                                message: 'training.training_split.errors.error_edit_training_split',
                            });
                            return EMPTY;
                        }),
                        map((trainingSplit: TrainingSplit) =>
                            trainingSplitActions.editTrainingSplitSuccess({ trainingSplit }),
                        ),
                    ),
            ),
        ),
    );

    editTrainingSplitSuccess$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(trainingSplitActions.editTrainingSplitSuccess),
                tap(() => this._trainingSplitSuccessService.closeModal()),
            ),
        { dispatch: false },
    );

    getTrainingSplitList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.getTrainingSplitList),
            switchMap((_) =>
                this._swaggerTrainingSplitsService.trainingSplitsControllerGetTrainingSplits().pipe(
                    mapStreamData<TrainingSplit[]>(),
                    map((response) =>
                        trainingSplitActions.getTrainingSplitListSuccess({
                            trainingSplitList: response,
                        }),
                    ),
                ),
            ),
        ),
    );

    dispatchTrainingSplitErrorMessage$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.getTrainingSplitListSuccess),
            filter((response) => response.trainingSplitList.IsError),
            map((_) =>
                commonActions.showToastMessage({
                    color: 'danger',
                    message: 'training.training_split.errors.error_get_training_splits',
                }),
            ),
        ),
    );

    constructor(
        private _swaggerTrainingSplitsService: SwaggerTrainingSplitsService,
        private _trainingSplitSuccessService: TrainingSplitSuccessService,
        private _actions$: Actions,
    ) {}
}
