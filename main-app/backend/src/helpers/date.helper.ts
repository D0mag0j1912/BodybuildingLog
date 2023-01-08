import {
    endOfWeek,
    startOfWeek,
    isSameWeek,
    eachDayOfInterval,
    startOfDay,
    endOfDay,
} from 'date-fns';
import { max, min } from 'date-fns';
import { NewTrainingDto } from '../models/training/new-training/new-training.model';
import { DateIntervalDto } from '../models/common/dates.model';

export function setTrainingDate(
    weekOrSearch: Date | NewTrainingDto[],
    searchEmptyDates?: DateIntervalDto,
): DateIntervalDto {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(weekOrSearch)) {
        if (weekOrSearch.length > 0) {
            const dates: Date[] = weekOrSearch.map((x: NewTrainingDto) => x.trainingDate);
            minDate = startOfDay(min(dates));
            maxDate = startOfDay(max(dates));
        } else {
            minDate = startOfDay(searchEmptyDates.StartDate);
            maxDate = startOfDay(searchEmptyDates.EndDate);
        }
    } else {
        minDate = startOfWeek(startOfDay(weekOrSearch), { weekStartsOn: 1 });
        maxDate = endOfWeek(endOfDay(weekOrSearch), { weekStartsOn: 1 });
    }
    return {
        StartDate: minDate,
        EndDate: maxDate,
    } as DateIntervalDto;
}

export const isPreviousWeek = (minDate: Date, dateInterval: DateIntervalDto): boolean =>
    !(
        isSameWeek(startOfDay(minDate), startOfDay(dateInterval.StartDate), { weekStartsOn: 1 }) &&
        isSameWeek(startOfDay(minDate), startOfDay(dateInterval.EndDate), { weekStartsOn: 1 })
    );

export const isNextWeek = (dateInterval: DateIntervalDto): boolean => {
    const arrayOfDates: number[] = eachDayOfInterval({
        start: startOfDay(dateInterval.StartDate),
        end: startOfDay(dateInterval.EndDate),
    }).map((date: Date) => date.getTime());
    return !arrayOfDates.includes(startOfDay(new Date()).getTime());
};
