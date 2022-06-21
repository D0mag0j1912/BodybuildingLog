import { startOfWeek, differenceInDays, addDays } from 'date-fns';

export function calculateLastWeekDay(startingDate: Date): Date {
    const startOfCurrentWeek = startOfWeek(startingDate, { weekStartsOn: 1 });
    const currentWeekDayIndex = differenceInDays(startingDate, startOfCurrentWeek);
    const startOfLastWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    return addDays(startOfLastWeek, currentWeekDayIndex);
}

export function calculateFirstWeekDay(
    earliestTrainingDate: string,
    startingDate: Date,
): Date {
    const startOfCurrentWeek = startOfWeek(startingDate, { weekStartsOn: 1 });
    const currentWeekDayIndex = differenceInDays(startingDate, startOfCurrentWeek);
    const startOfFirstWeek = startOfWeek(new Date(earliestTrainingDate), { weekStartsOn: 1 });
    return addDays(startOfFirstWeek, currentWeekDayIndex);
}

export function getCurrentDayIndex(date: Date): number {
    const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 });
    const currentDayIndex = differenceInDays(date, startOfWeekDate);
    return currentDayIndex;
}
