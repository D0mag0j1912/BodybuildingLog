import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { SwaggerTrainingSplitsService } from '../../../api';
import { GeneralResponseDto as Message } from '../../../api/models/general-response-dto';
import { MESSAGE_DURATION } from '../../constants/shared/message-duration.const';
import { mapStreamData } from '../../helpers/training/past-trainings/map-stream-data.helper';
import { TrainingSplitSuccessService } from '../../services/helper/training-split-success.service';
import { ToastControllerService } from '../../services/shared/toast-controller.service';
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
                        map((response: Message) => {
                            commonActions.showToastMessage({
                                color: 'primary',
                                message: response.Message,
                            });
                            return trainingSplitActions.createTrainingSplitSuccess();
                        }),
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

    getTrainingSplitList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.getTrainingSplitList),
            switchMap((_) =>
                this._swaggerTrainingSplitsService.trainingSplitsControllerGetTrainingSplits().pipe(
                    tap((_) => {
                        throw new Error('Error happened!');
                    }),
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

    showToastMessage$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(commonActions.showToastMessage),
                tap(async (action) => {
                    await this._toastControllerService.displayToast({
                        message: this._translateService.instant(action.message),
                        duration:
                            action.color === 'danger'
                                ? MESSAGE_DURATION.ERROR
                                : MESSAGE_DURATION.GENERAL,
                        color: action.color,
                    });
                }),
            ),
        { dispatch: false },
    );

    constructor(
        private _swaggerTrainingSplitsService: SwaggerTrainingSplitsService,
        private _trainingSplitSuccessService: TrainingSplitSuccessService,
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _actions$: Actions,
    ) {}
}
