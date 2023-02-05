import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, take } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { environment } from '../../../../environments/environment';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { NewTrainingStoreService } from '../../store/training/new-training-store.service';
import { ExercisesStoreService } from '../../store/training/exercises-store.service';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { AuthResponseData } from '../../../models/auth/auth-data.model';

@Injectable({ providedIn: 'root' })
export class ExercisesService {
    constructor(
        private _newTrainingStoreService: NewTrainingStoreService,
        private _exercisesStoreService: ExercisesStoreService,
        private _authStoreService: AuthStoreService,
        private _http: HttpClient,
    ) {}

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this._http
            .get<StreamData<Exercise[]>>(environment.apiUrl + '/training/get-exercises')
            .pipe(
                switchMap((response: StreamData<Exercise[]>) => {
                    this._exercisesStoreService.emitAllExercises(response);
                    return from(Storage.get({ key: StorageItems.TRAINING_STATE })).pipe(
                        switchMap((storedData) => {
                            if (!storedData || !storedData?.value) {
                                return this._authStoreService.loggedUser$.pipe(
                                    take(1),
                                    switchMap((authResponseData: AuthResponseData) =>
                                        this._newTrainingStoreService.updateTrainingState(
                                            undefined,
                                            response.Value,
                                            true,
                                            authResponseData._id,
                                        ),
                                    ),
                                    switchMap((_) => of(response)),
                                );
                            }
                            return of(response);
                        }),
                    );
                }),
            );
    }
}
