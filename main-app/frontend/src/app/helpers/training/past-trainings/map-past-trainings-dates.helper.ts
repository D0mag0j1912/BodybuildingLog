import { startOfDay } from 'date-fns';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

export function mapDateInterval(response: Paginator<PastTrainings>): Paginator<PastTrainings> {
    return {
        ...response,
        Results: {
            ...response.Results,
            Dates: {
                StartDate: response.Results.Dates.StartDate
                    ? startOfDay(new Date(response.Results.Dates.StartDate)).toISOString()
                    : undefined,
                EndDate: response.Results.Dates.EndDate
                    ? startOfDay(new Date(response.Results.Dates.EndDate)).toISOString()
                    : undefined,
            },
        } as PastTrainings,
    };
}
