import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';
import { BehaviorSubject, combineLatest, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class PastTrainingsStoreService {

    private readonly _pastTrainingsQueryParams$$: BehaviorSubject<PastTrainingsQueryParams> = new BehaviorSubject<PastTrainingsQueryParams>(null);
    readonly pastTrainingsQueryParams$: Observable<PastTrainingsQueryParams> = this._pastTrainingsQueryParams$$.asObservable();

    private readonly _pastTrainingsWrapperScroll$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    readonly pastTrainingsWrapperScroll$: Observable<number> = this._pastTrainingsWrapperScroll$$.asObservable();

    async emitPastTrainingsQueryParams(params: PastTrainingsQueryParams): Promise<void> {
        this._pastTrainingsQueryParams$$.next(params);
        await Storage.set({
            key: StorageItems.QUERY_PARAMS,
            value: JSON.stringify(params),
        });
    }

    async emitWrapperScroll(scrollTop: number): Promise<void> {
        this._pastTrainingsWrapperScroll$$.next(scrollTop);
        await Storage.set({
            key: StorageItems.PAST_TRAININGS_SCROLL_WRAPPER,
            value: JSON.stringify(scrollTop),
        });
    }

    keepStreamValues(storageItems: StorageItems[]): Observable<boolean> {
        const storageStreams: Observable<GetResult>[] = [];
        for (const key of storageItems) {
            storageStreams.push(from(Storage.get({ key })));
        }
        return combineLatest(storageStreams)
            .pipe(
                map(storedData => {
                    const isStoredData = storedData.every(item => !!item?.value);
                    if (!storedData || !storedData.length || !isStoredData) {
                        return false;
                    }
                    storedData.forEach((item, index) => {
                        if (item?.value) {
                            const parsedData = JSON.parse(item.value);
                            const selectedStorageItem = storageItems.find((_item, i) => i === index);
                            switch (selectedStorageItem) {
                                case 'pastTrainingsScrollWrapper': {
                                    this._pastTrainingsWrapperScroll$$.next(parsedData);
                                    break;
                                }
                                case 'queryParams': {
                                    this._pastTrainingsQueryParams$$.next(parsedData);
                                    break;
                                }
                            }
                        }
                    });
                    return true;
                }),
            );
    }
}
