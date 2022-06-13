import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { environment } from '../../../../environments/environment';
import { StreamData } from '../../../models/common/interfaces/common.model';
import { LocalStorageItems } from '../../../models/common/interfaces/common.model';
import { GeneralResponseData } from '../../../models/general-response.model';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/training.model';
import { AuthStateService } from '../../state/auth/auth-state.service';
import { NewTrainingStateService } from '../../state/training/new-training-state.service';

@Injectable({ providedIn: 'root' })
export class NewTrainingService {

    constructor(
        private readonly http: HttpClient,
        private readonly authStateService: AuthStateService,
        private readonly newTrainingStateService: NewTrainingStateService,
    ) { }

    getExerciseByName(exerciseName: string): Observable<Exercise> {
        const params = new HttpParams().set('exerciseName', exerciseName);
        return this.http.get<Exercise>(environment.BACKEND + '/training/get_exercise', { params: params });
    }

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this.http.get<StreamData<Exercise[]>>(environment.BACKEND + '/training/get_exercises')
            .pipe(
                switchMap((response: StreamData<Exercise[]>) => {
                    this.newTrainingStateService.emitAllExercises(response);
                    const trainingState: Training = JSON.parse(localStorage.getItem(LocalStorageItems.TRAINING_STATE));
                    if (!trainingState) {
                        return this.authStateService.loggedUser$
                            .pipe(
                                take(1),
                                tap((authResponseData: AuthResponseData) => {
                                    this.newTrainingStateService.updateTrainingState(
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
        return this.http.post<GeneralResponseData>(environment.BACKEND + '/training/handle_training', { trainingData });
    }

    updateTraining(
        trainingData: Training,
        trainingId: string,
    ): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/training/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
    }

}
