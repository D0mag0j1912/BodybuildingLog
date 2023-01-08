import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import {
    PastTrainings,
    PeriodFilterType,
} from '../../../models/training/past-trainings/past-trainings.model';

const ROUTE_PREFIX = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {
    constructor(private readonly _http: HttpClient) {}

    searchPastTrainings(
        searchValue: string,
        pageSize: number,
        currentPage: number,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?searchValue=${searchValue}&size=${pageSize.toString()}&page=${currentPage.toString()}`;
        return this._http
            .get<StreamData<Paginator<PastTrainings>>>(
                `${environment.apiUrl}${ROUTE_PREFIX}search-trainings${params}`,
            )
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }

    getPastTrainings(
        currentDate: Date,
        filterType: PeriodFilterType,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?currentDate=${currentDate}&filterType=${filterType}`;
        return this._http
            .get<StreamData<Paginator<PastTrainings>>>(
                `${environment.apiUrl}${ROUTE_PREFIX}past-trainings${params}`,
            )
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }

    getPastTraining(id: string): Observable<StreamData<NewTraining>> {
        return this._http.get<StreamData<NewTraining>>(
            `${environment.apiUrl}${ROUTE_PREFIX}past-trainings/${id}`,
        );
    }
}
