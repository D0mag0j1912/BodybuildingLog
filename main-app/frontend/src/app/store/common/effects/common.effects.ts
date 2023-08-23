import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { ToastControllerService } from '../../../services/shared/toast-controller.service';
import * as commonActions from '../actions/common.actions';

@Injectable()
export class CommonEffects {
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
        private _toastControllerService: ToastControllerService,
        private _translateService: TranslateService,
        private _actions$: Actions,
    ) {}
}
