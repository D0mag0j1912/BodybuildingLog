import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class PastTrainingsStoreService {

    private readonly _pastTrainingsQueryParams$$: BehaviorSubject<PastTrainingsQueryParams> = new BehaviorSubject<PastTrainingsQueryParams>(null);
    readonly pastTrainingsQueryParams$: Observable<PastTrainingsQueryParams> = this._pastTrainingsQueryParams$$.asObservable();

    keepQueryParams(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.QUERY_PARAMS }))
            .pipe(
                map(storedData => {
                    if (!storedData || !storedData?.value) {
                        return false;
                    }
                    const queryParams = JSON.parse(storedData.value);
                    this._pastTrainingsQueryParams$$.next(queryParams);
                    return true;
                }),
            );
    }

    emitPastTrainingsQueryParams(params: PastTrainingsQueryParams): void {
        this._pastTrainingsQueryParams$$.next(params);
    }
}
