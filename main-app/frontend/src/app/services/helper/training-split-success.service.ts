import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TrainingSplitSuccessService {
    private _closeModal$ = new Subject<void>();
    closeModal$ = this._closeModal$.asObservable();

    closeModal(): void {
        this._closeModal$.next();
    }
}