import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { mapDateInterval } from '../../helpers/map-past-trainings-dates.helper';
import { Data } from '../../models/common.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

const ROUTE_PREFIX: string = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    constructor(
        private readonly http: HttpClient,
    ) {}

    searchPastTrainings(searchValue: string): Observable<Data<PastTrainingsResponse>> {
        const params: string = `?searchValue=${searchValue}`;
        return this.http.get<Data<PastTrainingsResponse>>(`${environment.BACKEND}${ROUTE_PREFIX}search_trainings${params}`)
            .pipe(
                map((response: Data<PastTrainingsResponse>) => mapDateInterval(response)),
            );
    }

    getPastTrainings(currentDate: Date): Observable<Data<PastTrainingsResponse>> {
        const params: string = `?currentDate=${currentDate}`;
        return this.http.get<Data<PastTrainingsResponse>>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe(
                map((response: Data<PastTrainingsResponse>) => mapDateInterval(response)),
            );
    }

    getPastTraining(id: string): Observable<Training> {
        return this.http.get<Training>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }

}
