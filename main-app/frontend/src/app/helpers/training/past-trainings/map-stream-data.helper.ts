import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { StreamData } from '../../../models/common/common.model';

export const mapStreamData =
    <T>() =>
    (source: Observable<StreamData<T>>) =>
        source.pipe(
            map((data: StreamData<T>) => ({
                IsLoading: false,
                Value: data.Value,
                IsError: false,
            })),
            catchError((_) =>
                of({
                    IsLoading: false,
                    IsError: true,
                }),
            ),
            startWith({
                IsLoading: true,
                IsError: false,
            }),
        );
