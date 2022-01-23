import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { TrainingData } from '../../../models/common/interfaces/common.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings.model';

export const mapStreamData = <T extends PastTrainingsResponse | Training>() =>
    (source: Observable<TrainingData<T>>) =>
        source.pipe(
            map((trainingData: TrainingData<T>) => ({
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
