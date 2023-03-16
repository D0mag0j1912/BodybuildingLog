import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';
import { GeneralResponseDto } from '../../../../api/models';

@Injectable({ providedIn: 'root' })
export class NewTrainingService {
    constructor(private _http: HttpClient) {}

    addTraining(trainingData: NewTraining): Observable<GeneralResponseDto> {
        return this._http.post<GeneralResponseDto>(
            environment.apiUrl + '/api/training/new-training',
            trainingData,
        );
    }

    updateTraining(trainingData: NewTraining, trainingId: string): Observable<GeneralResponseDto> {
        return this._http.put<GeneralResponseDto>(
            environment.apiUrl + `/api/training/new-training/${trainingId}`,
            trainingData,
        );
    }
}
