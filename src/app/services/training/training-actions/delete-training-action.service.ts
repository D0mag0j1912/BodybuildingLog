import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DeleteTrainingActionService {

    constructor(
        private readonly http: HttpClient,
    ){}

    deleteTraining(trainingId: string): Observable<GeneralResponseData>{
        return this.http.delete<GeneralResponseData>(environment.backend + `/delete-training/${trainingId}`);
    }
}
