import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PastTrainingsStateService {

    private readonly _isSearch$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isSearch$: Observable<boolean> = this._isSearch$$.asObservable();

    emitSearch(value?: string): void {
        this._isSearch$$.next(!!value);
    }
}
