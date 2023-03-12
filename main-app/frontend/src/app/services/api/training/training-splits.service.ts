import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TrainingSplitsService {
    constructor(private _http: HttpClient) {}

    createTrainingSplit(trainingSplit: TrainingSplit): Observable<unknown> {
        return this._http.post<unknown>(
            environment.apiUrl + '/training/training-splits',
            trainingSplit,
        );
    }
}
