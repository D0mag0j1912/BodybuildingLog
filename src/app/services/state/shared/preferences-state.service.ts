import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Preferences } from '../../../models/preferences.model';

@Injectable({ providedIn: 'root' })
export class PreferencesStateService {

    private readonly _preferencesChanged$$: BehaviorSubject<Preferences> = new BehaviorSubject(null);
    readonly preferencesChanged$: Observable<Preferences> = this._preferencesChanged$$.asObservable();

    emitPreferences(preferences: Preferences): void {
        this._preferencesChanged$$.next(preferences);
    }

    getPreferences(): Preferences {
        return { ...this._preferencesChanged$$.getValue() };
    }

}
