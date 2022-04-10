import { StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator } from '../../../models/common/interfaces/paginator.model';
import { DateInterval, PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: StreamData<Paginator<PastTrainings>>): StreamData<Paginator<PastTrainings>> {
    return {
        ...response,
        Value: {
            ...response.Value,
            Results: {
                ...response.Value.Results,
                Dates: {
                    StartDate: new Date(response.Value?.Results?.Dates?.StartDate ?? null),
                    EndDate: response?.Value?.Results?.Dates?.EndDate ? new Date(response.Value?.Results?.Dates?.EndDate) : undefined,
                } as DateInterval,
            } as PastTrainings,
        } as Paginator<PastTrainings>,
    };
}
