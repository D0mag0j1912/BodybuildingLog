import { endOfWeek, startOfWeek, isSameWeek, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';
import { max, min } from 'date-fns';
import { Training } from '../models/training/new-training/training.model';
import { DateInterval } from '../models/common/dates.model';

export function getIntervalDate(currentDateOrTrainings: string | Training[]): DateInterval {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(currentDateOrTrainings)) {
        const dates: Date[] = currentDateOrTrainings.map((x: Training) => new Date(x.trainingDate));
        minDate = startOfDay(min(dates));
        maxDate = startOfDay(max(dates));
    }
    else {
        minDate = startOfWeek(startOfDay(new Date(currentDateOrTrainings)), { weekStartsOn: 1 });
        maxDate = endOfWeek(endOfDay(new Date(currentDateOrTrainings)), { weekStartsOn: 1 });
    }
    return {
        StartDate: minDate.toString(),
        EndDate: maxDate.toString(),
    } as DateInterval;
}

export const isPreviousWeek = (
    minDate: string,
    dateInterval: DateInterval,
): boolean => !(isSameWeek(startOfDay(new Date(minDate)), startOfDay(new Date(dateInterval.StartDate)), { weekStartsOn: 1 }) &&
    isSameWeek(startOfDay(new Date(minDate)), startOfDay(new Date(dateInterval.EndDate)), { weekStartsOn: 1 }));

export const isNextWeek = (dateInterval: DateInterval): boolean => {
    const arrayOfDates: number[] = eachDayOfInterval({
        start: startOfDay(new Date(dateInterval.StartDate)),
        end: startOfDay(new Date(dateInterval.EndDate)),
    }).map((date: Date) => date.getTime());
    return !arrayOfDates.includes(startOfDay(new Date()).getTime());
};