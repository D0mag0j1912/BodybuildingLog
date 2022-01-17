import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { TrainingData } from '../../../models/common/interfaces/common.model';
import { PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings.model';

export const mapPastTrainingsTemplate = () =>
    (source: Observable<TrainingData<PastTrainingsResponse>>) =>
        source.pipe(
            map((trainingData: TrainingData<PastTrainingsResponse>) => ({
                IsLoading: false,
                Value: trainingData?.Value,
                IsError: false,
            })),
            catchError(_ => of({
                IsLoading: false,
                IsError: true,
            } as TrainingData<PastTrainingsResponse>)),
            startWith({
                IsLoading: true,
                IsError: false,
            } as TrainingData<PastTrainingsResponse>),
        );
