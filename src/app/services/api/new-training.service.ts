import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StreamData } from '../../models/common/interfaces/common.model';
import { GeneralResponseData } from '../../models/general-response.model';
import { Exercise } from '../../models/training/exercise.model';
import { Training } from '../../models/training/new-training/training.model';

@Injectable({ providedIn: 'root' })
export class NewTrainingService {

    constructor(
        private readonly _http: HttpClient,
    ) { }

    getExerciseByName(exerciseName: string): Observable<Exercise> {
        const params = new HttpParams().set('exerciseName', exerciseName);
        return this._http.get<Exercise>(environment.BACKEND + '/training/get_exercise', { params: params });
    }

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this._http.get<StreamData<Exercise[]>>(environment.BACKEND + '/training/get_exercises');
    }

    addTraining(trainingData: Training): Observable<GeneralResponseData> {
        return this._http.post<GeneralResponseData>(environment.BACKEND + '/training/handle_training', { trainingData: trainingData });
    }

    updateTraining(
        trainingData: Training,
        trainingId: string,
    ): Observable<GeneralResponseData> {
        return this._http.put<GeneralResponseData>(environment.BACKEND + `/training/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
    }

}
