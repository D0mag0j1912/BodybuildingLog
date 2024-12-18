import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';
import { BehaviorSubject, combineLatest, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageItems } from '../../../constants/enums/storage-items.enum';

@Injectable({ providedIn: 'root' })
export class PastTrainingsStoreService {
    private _pastTrainingsWrapperScroll$ = new BehaviorSubject<number>(0);
    pastTrainingsWrapperScroll$ = this._pastTrainingsWrapperScroll$.asObservable();

    async emitWrapperScroll(scrollTop: number): Promise<void> {
        this._pastTrainingsWrapperScroll$.next(scrollTop);
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
        return combineLatest(storageStreams).pipe(
            map((storedData: GetResult[]) => {
                const isStoredData = storedData.every((item) => !!item?.value);
                if (!storedData || !storedData.length || !isStoredData) {
                    return false;
                }
                storedData.forEach((item, index) => {
                    if (item?.value) {
                        const parsedData = JSON.parse(item.value);
                        const selectedStorageItem = storageItems.find((_item, i) => i === index);
                        switch (selectedStorageItem) {
                            case 'pastTrainingsScrollWrapper': {
                                this._pastTrainingsWrapperScroll$.next(parsedData);
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
