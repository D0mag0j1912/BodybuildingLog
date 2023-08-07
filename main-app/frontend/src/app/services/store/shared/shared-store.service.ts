import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedStoreService {
    _dayClicked$ = new BehaviorSubject<string>(null);

    completeDayClicked(): void {
        this._dayClicked$.complete();
    }

    emitDayClicked(dayClicked: string): void {
        this._dayClicked$.next(dayClicked);
    }

    getDayClickedDate(): string | undefined {
        return this._dayClicked$.getValue();
    }
}
