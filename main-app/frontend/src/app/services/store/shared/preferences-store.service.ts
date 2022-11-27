import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '../../../models/common/preferences.model';

@Injectable({ providedIn: 'root' })
export class PreferencesStoreService {
    private _preferencesChanged$ = new BehaviorSubject(null);
    preferencesChanged$ = this._preferencesChanged$.asObservable();

    emitPreferences(preferences: Preferences): void {
        this._preferencesChanged$.next(preferences);
    }

    getPreferences(): Preferences {
        return { ...this._preferencesChanged$.getValue() };
    }
}
