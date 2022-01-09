import { Data } from '../models/common.model';
import { DateInterval, PastTrainingsResponse } from '../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: Data<PastTrainingsResponse>): Data<PastTrainingsResponse> {
    return {
        ...response,
        value: {
            ...response.value,
            dates: {
                startDate: new Date(response.value?.dates?.startDate ?? null),
                endDate: new Date(response.value?.dates?.endDate ?? null),
            } as DateInterval,
        } as PastTrainingsResponse,
    } as Data<PastTrainingsResponse>;
}
