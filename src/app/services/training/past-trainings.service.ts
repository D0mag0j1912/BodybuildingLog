import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { mapDateInterval } from '../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../models/common/interfaces/common.model';
import { Paginator } from '../../models/common/interfaces/paginator.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainings } from '../../models/training/past-trainings/past-trainings.model';

const ROUTE_PREFIX = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    searchPastTrainings(
        searchValue: string,
        pageSize: number,
        currentPage: number,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this.http.get<StreamData<Paginator<PastTrainings>>>(`${environment.BACKEND}${ROUTE_PREFIX}search_trainings${params}`)
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }

    getPastTrainings(currentDate: Date): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?currentDate=${currentDate}`;
        return this.http.get<StreamData<Paginator<PastTrainings>>>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }

    getPastTraining(id: string): Observable<StreamData<Training>> {
        return this.http.get<StreamData<Training>>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }

}
