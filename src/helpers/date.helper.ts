import { endOfWeek, startOfWeek, isSameWeek, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';
import { max, min } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Training } from '../models/training/new-training/new-training.model';
import { TIMEZONE } from '../constants/timezone';
import { DateInterval } from '../models/common/dates.model';

export function getIntervalDate(currentDateOrTrainings: Date | Training[]): DateInterval {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(currentDateOrTrainings)) {
        const dates: Date[] = currentDateOrTrainings.map((x: Training) => x.createdAt);
        minDate = min(dates);
        maxDate = max(dates);
    }
    else {
        minDate = startOfWeek(startOfDay(currentDateOrTrainings), { weekStartsOn: 1 });
        maxDate = endOfWeek(endOfDay(currentDateOrTrainings), { weekStartsOn: 1 });
    }
    return {
        StartDate: minDate,
        EndDate: maxDate,
    } as DateInterval;
}

export const isPreviousWeek = (
    minDate: Date,
    dateInterval: DateInterval,
): boolean => !(isSameWeek(minDate, dateInterval.StartDate, { weekStartsOn: 1 }) && isSameWeek(minDate, dateInterval.EndDate, { weekStartsOn: 1 }));

export const isNextWeek = (dateInterval: DateInterval): boolean => {
    const arrayOfDates: number[] = eachDayOfInterval({
        start: utcToZonedTime(
            dateInterval.StartDate,
            TIMEZONE),
        end: utcToZonedTime(
            dateInterval.EndDate,
            TIMEZONE),
    }).map((date: Date) => date.getTime());
    return !arrayOfDates.includes(startOfDay(new Date()).getTime());
};