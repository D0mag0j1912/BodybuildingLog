import { startOfWeek, startOfDay, endOfWeek, endOfDay, format } from 'date-fns';
import { Preferences } from '../../../models/interfaces/preferences.model';
import { PastTrainingsQueryParams, PeriodFilterType, QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';

export function getQueryParamsFromPreviousUrl(
    previousUrl: string,
    userPreferences: Preferences,
): PastTrainingsQueryParams {
    if (previousUrl) {
        const obj = Object.assign({}) as PastTrainingsQueryParams;
        const url = previousUrl.split('?');
        const queryParams = url[1].split('&');
        for (const entry of queryParams) {
            const [key, value] = entry.split('=');
            const castedKey = key as keyof PastTrainingsQueryParams & keyof PeriodFilterType;
            obj[castedKey] = value;
        }
        return obj;
    }
    else {
        const showByPeriod = userPreferences?.ShowByPeriod ?? 'week';
        const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
        const endDate = showByPeriod === 'week' ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 }) : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
        return {
            startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
            endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
            showBy: showByPeriod,
        } as PastTrainingsQueryParams;
    }
}
