import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponseDto as Message } from '../../../../api/models/general-response-dto';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TrainingSplitsService {
    constructor(private _http: HttpClient) {}

    createTrainingSplit(trainingSplit: TrainingSplit): Observable<Message> {
        return this._http.post<Message>(
            environment.apiUrl + '/training/training-splits',
            trainingSplit,
        );
    }
}
