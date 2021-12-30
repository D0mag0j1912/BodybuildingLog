import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

const ROUTE_PREFIX: string = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    constructor(
        private readonly http: HttpClient,
    ) {}

    searchPastTrainings(searchValue: string): Observable<PastTrainingsResponse> {
        const params: string = `?searchValue=${searchValue}`;
        return this.http.get<PastTrainingsResponse>(`${environment.BACKEND}${ROUTE_PREFIX}search_trainings${params}`);
    }

    getPastTrainings(currentDate: Date): Observable<PastTrainingsResponse> {
        const params: string = `?currentDate=${currentDate}`;
        return this.http.get<PastTrainingsResponse>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`);
    }

    getPastTraining(id: string): Observable<Training> {
        return this.http.get<Training>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }

}
