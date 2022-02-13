import { endOfWeek, startOfWeek, isSameWeek } from 'date-fns';
import { max, min } from 'date-fns';
import { Training } from '../models/training/new-training/new-training.model';

export interface DateInterval {
    readonly StartDate: Date;
    readonly EndDate: Date;
}

export function getIntervalDate(currentDateOrTrainings: Date | Training[]): DateInterval {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(currentDateOrTrainings)) {
        const dates: Date[] = currentDateOrTrainings.map((x: Training) => x.createdAt);
        minDate = min(dates);
        maxDate = max(dates);
    }
    else {
        minDate = startOfWeek(currentDateOrTrainings, { weekStartsOn: 1 });
        maxDate = endOfWeek(currentDateOrTrainings, { weekStartsOn: 1 });
    }
    return {
        StartDate: minDate,
        EndDate: maxDate,
    } as DateInterval;
}

export const isPreviousWeekDisabled = (
    minDate: Date,
    dateInterval: DateInterval,
): boolean => isSameWeek(minDate, dateInterval.StartDate, { weekStartsOn: 1 }) && isSameWeek(minDate, dateInterval.EndDate, { weekStartsOn: 1 });