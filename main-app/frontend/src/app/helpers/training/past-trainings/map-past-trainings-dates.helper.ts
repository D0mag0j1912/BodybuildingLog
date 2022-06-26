import { startOfDay } from 'date-fns';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { DateInterval, PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: StreamData<Paginator<PastTrainings>>): StreamData<Paginator<PastTrainings>> {
    return {
        ...response,
        Value: {
            ...response.Value,
            Results: {
                ...response.Value.Results,
                Dates: {
                    StartDate: response?.Value?.Results?.Dates?.StartDate ? startOfDay(new Date(response.Value?.Results?.Dates?.StartDate)) : undefined,
                    EndDate: response?.Value?.Results?.Dates?.EndDate ? startOfDay(new Date(response.Value?.Results?.Dates?.EndDate)) : undefined,
                } as DateInterval,
            } as PastTrainings,
        } as Paginator<PastTrainings>,
    };
}
