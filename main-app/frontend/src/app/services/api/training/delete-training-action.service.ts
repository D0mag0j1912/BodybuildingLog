import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteTrainingMetaDto } from '../../../../api';
import { environment } from '../../../../environments/environment';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class TrainingActionsService {
    constructor(private _http: HttpClient) {}

    deleteTraining(
        trainingId: string,
        deleteTrainingMeta: DeleteTrainingMetaDto,
    ): Observable<StreamData<Paginator<PastTrainings>>> {
        return this._http
            .delete<StreamData<Paginator<PastTrainings>>>(
                environment.apiUrl + `/api/training/delete-training/${trainingId}`,
                {
                    body: { deleteTrainingMeta },
                },
            )
            .pipe(
                map((response: StreamData<Paginator<PastTrainings>>) => mapDateInterval(response)),
            );
    }
}
