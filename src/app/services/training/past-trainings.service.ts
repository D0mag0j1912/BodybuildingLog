import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings-response.model';

const ROUTE_PREFIX: string = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    constructor(
        private readonly http: HttpClient,
    ) {}

    //http://localhost:3000/training/search-trainings/615a8735632e533ba8d0eb01?searchValue=test
    searchPastTrainings(searchValue: string): Observable<unknown> {
        const params: HttpParams = new HttpParams().append('searchValue', searchValue);
        return this.http.get<unknown>(`${environment.BACKEND}${ROUTE_PREFIX}search_trainings/${params}`);
    }

    getPastTrainings(currentDate: Date): Observable<PastTrainingsResponse> {
        const params: string = `?currentDate=${currentDate}`;
        return this.http.get<PastTrainingsResponse>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`);
    }

    getPastTraining(id: string): Observable<NewTraining> {
        return this.http.get<NewTraining>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }

}
