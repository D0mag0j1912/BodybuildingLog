import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { environment } from '../../../../environments/environment';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { StorageItems } from '../../../models/common/interfaces/common.model';
import { GeneralResponseData } from '../../../models/interfaces/general-response.model';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/training.model';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { TrainingStoreService } from '../../store/training/training-store.service';

@Injectable({ providedIn: 'root' })
export class TrainingService {

    constructor(
        private readonly http: HttpClient,
        private readonly authStoreService: AuthStoreService,
        private readonly trainingStoreService: TrainingStoreService,
    ) { }

    getExerciseByName(exerciseName: string): Observable<Exercise> {
        const params = new HttpParams().set('exerciseName', exerciseName);
        return this.http.get<Exercise>(environment.BACKEND + '/training/get_exercise', { params: params });
    }

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this.http.get<StreamData<Exercise[]>>(environment.BACKEND + '/training/get-exercises')
            .pipe(
                switchMap((response: StreamData<Exercise[]>) => {
                    this.trainingStoreService.emitAllExercises(response);
                    const trainingState: Training = JSON.parse(localStorage.getItem(StorageItems.TRAINING_STATE));
                    if (!trainingState) {
                        return this.authStoreService.loggedUser$
                            .pipe(
                                take(1),
                                tap((authResponseData: AuthResponseData) => {
                                    this.trainingStoreService.updateTrainingState(
                                        undefined,
                                        response.Value,
                                        true,
                                        authResponseData._id,
                                    );
                                }),
                                switchMap(_ => of(response)),
                            );
                    }
                    else {
                        return of(response);
                    }
                }),
            );
    }

    addTraining(trainingData: Training): Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(environment.BACKEND + '/training/handle-training', { trainingData });
    }

    updateTraining(
        trainingData: Training,
        trainingId: string,
    ): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/training/handle-training/${trainingId}`, { updatedTrainingData: trainingData });
    }

}
