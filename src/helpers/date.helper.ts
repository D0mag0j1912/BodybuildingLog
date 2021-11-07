import { endOfWeek, startOfWeek } from 'date-fns';

export interface DateInterval {
    startDate: Date;
    endDate: Date;
}

export function getIntervalDate(currentDate: Date): DateInterval {
    const startDate: Date = startOfWeek(currentDate, {
        weekStartsOn: 1
    });
    const endDate: Date = endOfWeek(currentDate, {
        weekStartsOn: 1
    });
    return {
        startDate: startDate,
        endDate: endDate
    } as DateInterval;
}