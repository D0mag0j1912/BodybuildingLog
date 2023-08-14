import {
    endOfWeek,
    startOfWeek,
    isSameWeek,
    eachDayOfInterval,
    startOfDay,
    endOfDay,
    compareAsc,
} from 'date-fns';
import { max, min } from 'date-fns';
import { NewTrainingDto } from '../models/training/new-training/new-training.model';
import { DateIntervalDto } from '../models/common/dates.model';
import { PeriodFilterType } from '../models/training/past-trainings/period-filter.type';

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

/** Returns true if previous page is enabled, otherwise false */
export const isPrevious = (
    periodFilterType: PeriodFilterType,
    earliestTrainingDate: Date,
    currentDate: Date,
): boolean => {
    switch (periodFilterType) {
        case 'day': {
            return compareAsc(new Date(currentDate), earliestTrainingDate) === 1 ? true : false;
        }
        case 'week': {
            const startDate = startOfWeek(startOfDay(currentDate), { weekStartsOn: 1 });
            const endDate = endOfWeek(endOfDay(currentDate), { weekStartsOn: 1 });
            return isPreviousWeek(earliestTrainingDate, {
                StartDate: startDate,
                EndDate: endDate,
            });
        }
    }
};

/** Returns true if next page is enabled, otherwise false */
export const isNext = (periodFilterType: PeriodFilterType, latestDate: Date, currentDate: Date) => {
    switch (periodFilterType) {
        case 'day': {
            return compareAsc(new Date(currentDate), latestDate) === 1 ? false : true;
        }
        case 'week': {
            const startDate = startOfWeek(startOfDay(currentDate), { weekStartsOn: 1 });
            const endDate = endOfWeek(endOfDay(currentDate), { weekStartsOn: 1 });
            return isNextWeek({
                StartDate: startDate,
                EndDate: endDate,
            });
        }
    }
};
