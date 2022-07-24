import { endOfWeek, startOfWeek, isSameWeek, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';
import { max, min } from 'date-fns';
import { NewTraining } from '../models/training/new-training/new-training.model';
import { DateInterval } from '../models/common/dates.model';

export function getIntervalDate(currentDateOrTrainings: Date | NewTraining[]): DateInterval {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(currentDateOrTrainings)) {
        const dates: Date[] = currentDateOrTrainings.map((x: NewTraining) => x.trainingDate);
        minDate = startOfDay(min(dates));
        maxDate = startOfDay(max(dates));
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
): boolean => !(isSameWeek(startOfDay(minDate), startOfDay(dateInterval.StartDate), { weekStartsOn: 1 }) &&
    isSameWeek(startOfDay(minDate), startOfDay(dateInterval.EndDate), { weekStartsOn: 1 }));

export const isNextWeek = (dateInterval: DateInterval): boolean => {
    const arrayOfDates: number[] = eachDayOfInterval({
        start: startOfDay(dateInterval.StartDate),
        end: startOfDay(dateInterval.EndDate),
    }).map((date: Date) => date.getTime());
    return !arrayOfDates.includes(startOfDay(new Date()).getTime());
};