import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import { environment } from 'src/environments/environment';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings-response.model';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    constructor(
        private readonly http: HttpClient,
    ) {}

    getPastTrainings(currentDate: Date): Observable<PastTrainingsResponse> {
        const params: string = `?currentDate=${currentDate}`;
        return this.http.get<PastTrainingsResponse>(environment.BACKEND + '/training/past_trainings' + params);
    }

    getPastTraining(id: string): Observable<NewTraining> {
        return this.http.get<NewTraining>(environment.BACKEND + `/training/past_trainings/${id}`);
    }

}
