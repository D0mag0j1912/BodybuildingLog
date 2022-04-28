import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { mapDateInterval } from '../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../models/common/interfaces/common.model';
import { Paginator } from '../../models/common/interfaces/paginator.model';
import { Training } from '../../models/training/new-training/training.model';
import { PastTrainings, PeriodFilterType } from '../../models/training/past-trainings/past-trainings.model';

const ROUTE_PREFIX = '/training/';

@Injectable({ providedIn: 'root' })
export class PastTrainingsService {

    private readonly isSearch$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isSearch$: Observable<boolean> = this.isSearch$$.asObservable();

    constructor(
        private readonly http: HttpClient,
    ) { }

    emitSearch(value?: string): void {
        this.isSearch$$.next(!!value);
    }

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

    getPastTrainings(
        currentDate: Date,
        filterType: PeriodFilterType,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = `?currentDate=${currentDate}&filterType=${filterType}`;
        return this.http.get<StreamData<Paginator<PastTrainings>>>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings${params}`)
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }

    getPastTraining(id: string): Observable<StreamData<Training>> {
        return this.http.get<StreamData<Training>>(`${environment.BACKEND}${ROUTE_PREFIX}past_trainings/${id}`);
    }

}
