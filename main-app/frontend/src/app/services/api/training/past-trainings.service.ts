import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { StreamData } from '../../../models/common/common.model';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';

const ROUTE_PREFIX = '/api/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {
    constructor(private readonly _http: HttpClient) {}

    getPastTraining(id: string): Observable<StreamData<NewTraining>> {
        return this._http.get<StreamData<NewTraining>>(
            `${environment.apiUrl}${ROUTE_PREFIX}past-trainings/${id}`,
        );
    }
}
