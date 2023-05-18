import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';

@Injectable({ providedIn: 'root' })
export class PreferencesStoreService {
    private _preferencesChanged$ = new BehaviorSubject<Preferences>(null);
    preferencesChanged$ = this._preferencesChanged$.asObservable();

    emitPreferences(preferences: Preferences): void {
        this._preferencesChanged$.next(preferences);
    }

    getPreferences(): Preferences {
        return { ...this._preferencesChanged$.getValue() };
    }
}
