import { TrainingData } from '../../../models/common/interfaces/common.model';
import { DateInterval, PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: TrainingData<PastTrainingsResponse>): TrainingData<PastTrainingsResponse> {
    return {
        ...response,
        Value: {
            ...response.Value,
            Dates: {
                StartDate: new Date(response.Value?.Dates?.StartDate ?? null),
                EndDate: new Date(response.Value?.Dates?.EndDate ?? null),
            } as DateInterval,
        } as PastTrainingsResponse,
    } as TrainingData<PastTrainingsResponse>;
}
