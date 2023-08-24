import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastOptions } from '@ionic/angular';
import { AppState } from '../..';
import * as CommonActions from './actions/common.actions';

@Injectable({ providedIn: 'root' })
export class CommonFacadeService {
    constructor(private _store: Store<AppState>) {}

    // Actions BEGIN ----------------------
    showToastMessage(color: ToastOptions['color'], message: string): void {
        this._store.dispatch(CommonActions.showToastMessage({ color, message }));
    }
    //Actions END -------------------------
}
