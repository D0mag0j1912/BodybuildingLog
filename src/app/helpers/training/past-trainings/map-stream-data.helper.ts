import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { StreamData } from '../../../models/common/interfaces/common.model';

export const mapStreamData = <T>() =>
    (source: Observable<StreamData<T>>) =>
        source.pipe(
            map((trainingData: StreamData<T>) => ({
                IsLoading: false,
                Value: trainingData?.Value,
                IsError: false,
            })),
            catchError(_ => of({
                IsLoading: false,
                IsError: true,
            })),
            startWith({
                IsLoading: true,
                IsError: false,
            }),
        );
