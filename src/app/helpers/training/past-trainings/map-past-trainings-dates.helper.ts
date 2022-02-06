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
                    EndDate: new Date(response.Value?.Results?.Dates?.EndDate ?? null),
                } as DateInterval,
            } as PastTrainings,
        } as Paginator<PastTrainings>,
    };
}
/*
export function mapDateInterval(response: StreamData<PastTrainings>): StreamData<PastTrainings> {
    return {
        ...response,
        Value: {
            ...response.Value,
            Dates: {
                StartDate: new Date(response.Value?.Dates?.StartDate ?? null),
                EndDate: new Date(response.Value?.Dates?.EndDate ?? null),
            } as DateInterval,
        } as PastTrainings,
    } as StreamData<PastTrainings>;
}
 */
