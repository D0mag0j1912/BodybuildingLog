import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { environment } from '../../../../environments/environment';
import { StreamData } from '../../../models/common/common.model';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { GeneralResponseData } from '../../../models/common/general-response.model';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { NewTrainingStoreService } from '../../store/training/new-training-store.service';

@Injectable({ providedIn: 'root' })
export class NewTrainingService {
    constructor(
        private readonly http: HttpClient,
        private readonly authStoreService: AuthStoreService,
        private readonly newTrainingStoreService: NewTrainingStoreService,
    ) {}

    getExerciseByName(exerciseName: string): Observable<Exercise> {
        const params = new HttpParams().set('exerciseName', exerciseName);
        return this.http.get<Exercise>(environment.BACKEND + '/training/get_exercise', {
            params: params,
        });
    }

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this.http
            .get<StreamData<Exercise[]>>(environment.BACKEND + '/training/get-exercises')
            .pipe(
                switchMap((response: StreamData<Exercise[]>) => {
                    this.newTrainingStoreService.emitAllExercises(response);
                    return from(Storage.get({ key: StorageItems.TRAINING_STATE })).pipe(
                        switchMap((storedData) => {
                            if (!storedData || !storedData?.value) {
                                return this.authStoreService.loggedUser$.pipe(
                                    take(1),
                                    switchMap((authResponseData: AuthResponseData) =>
                                        this.newTrainingStoreService.updateTrainingState(
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

    addTraining(trainingData: NewTraining): Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(
            environment.BACKEND + '/training/handle-training',
            { trainingData },
        );
    }

    updateTraining(trainingData: NewTraining, trainingId: string): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(
            environment.BACKEND + `/training/handle-training/${trainingId}`,
            {
                updatedTrainingData: trainingData,
            },
        );
    }
}
