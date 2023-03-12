import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../constants/shared/message-duration.const';
import { TrainingSplitsService } from '../../services/api/training/training-splits.service';
import { ToastControllerService } from '../../services/shared/toast-controller.service';
import * as trainingSplitActions from './training-splits.actions';

@Injectable()
export class TrainingSplitsEffects {
    createTrainingSplit$ = createEffect(() =>
        this._actions$.pipe(
            ofType(trainingSplitActions.createTrainingSplit),
            concatMap((action) =>
                this._trainingSplitsService.createTrainingSplit(action.trainingSplit).pipe(
                    catchError(async (_) => {
                        await this._toastControllerService.displayToast({
                            message: this._translateService.instant(
                                'training.training_split.errors.error_create_training_split',
                            ),
                            duration: MESSAGE_DURATION.GENERAL,
                            color: 'danger',
                        });
                        return EMPTY;
                    }),
                ),
            ),
            map(() => trainingSplitActions.createTrainingSplitSuccess()),
        ),
    );

    constructor(
        private _trainingSplitsService: TrainingSplitsService,
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _actions$: Actions,
    ) {}
}
