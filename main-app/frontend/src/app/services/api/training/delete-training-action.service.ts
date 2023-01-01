import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator, SearchDataDto } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class TrainingActionService {
    constructor(private _http: HttpClient) {}

    deleteTraining(
        trainingId: string,
        deleteTrainingMeta: {
            searchData: SearchDataDto | undefined;
            currentDate: Date | undefined;
        },
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        const params = new HttpParams().set('meta', JSON.stringify(deleteTrainingMeta));
        return this._http
            .delete<StreamData<Paginator<PastTrainings>>>(
                environment.BACKEND + `/training/delete-training/${trainingId}`,
                { params: params },
            )
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }
}
