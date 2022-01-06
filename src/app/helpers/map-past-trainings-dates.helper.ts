import { DateInterval, PastTrainingsResponse } from '../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: PastTrainingsResponse): PastTrainingsResponse {
    return {
        ...response,
        dates: {
            startDate: new Date(response?.dates?.startDate ?? null),
            endDate: new Date(response?.dates?.endDate ?? null),
        } as DateInterval,
    } as PastTrainingsResponse;
}
