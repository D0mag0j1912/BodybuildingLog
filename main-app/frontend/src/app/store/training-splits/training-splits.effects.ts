import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { SwaggerTrainingSplitsService } from '../../../api';
import { GeneralResponseDto as Message } from '../../../api/models/general-response-dto';
import { MESSAGE_DURATION } from '../../constants/shared/message-duration.const';
import { TrainingSplitSuccessService } from '../../services/helper/training-split-success.service';
import { ToastControllerService } from '../../services/shared/toast-controller.service';
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
                        tap(async (response: Message) => {
                            await this._toastControllerService.displayToast({
                                message: this._translateService.instant(response.Message),
                                duration: MESSAGE_DURATION.GENERAL,
                                color: 'primary',
                            });
                        }),
                        catchError(async (_) => {
                            await this._toastControllerService.displayToast({
                                message: this._translateService.instant(
                                    'training.training_split.errors.error_create_training_split',
                                ),
                                duration: MESSAGE_DURATION.ERROR,
                                color: 'danger',
                            });
                            return EMPTY;
                        }),
                        map(() => trainingSplitActions.createTrainingSplitSuccess()),
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
                this._swaggerTrainingSplitsService
                    .trainingSplitsControllerGetTrainingSplits()
                    .pipe(catchError((_) => EMPTY)),
            ),
            map((response) =>
                trainingSplitActions.getTrainingSplitListSuccess({
                    trainingSplitList: response,
                }),
            ),
        ),
    );

    constructor(
        private _swaggerTrainingSplitsService: SwaggerTrainingSplitsService,
        private _trainingSplitSuccessService: TrainingSplitSuccessService,
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _actions$: Actions,
    ) {}
}
