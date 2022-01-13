import { TrainingData } from '../models/common/interfaces/common.model';
import { DateInterval, PastTrainingsResponse } from '../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: TrainingData<PastTrainingsResponse>): TrainingData<PastTrainingsResponse> {
    return {
        ...response,
        Value: {
            ...response.Value,
            dates: {
                startDate: new Date(response.Value?.dates?.startDate ?? null),
                endDate: new Date(response.Value?.dates?.endDate ?? null),
            } as DateInterval,
        } as PastTrainingsResponse,
    } as TrainingData<PastTrainingsResponse>;
}
