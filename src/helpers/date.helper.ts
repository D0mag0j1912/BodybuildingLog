import { startOfWeek, endOfWeek } from 'date-fns';

export function getIntervalDate(currentDate: Date) {
    const startDate: Date = startOfWeek(currentDate, {
        weekStartsOn: 1
    });
    const endDate: Date = endOfWeek(currentDate, {
        weekStartsOn: 1
    });
    startDate.setHours(startDate.getHours() + 2);
    endDate.setHours(endDate.getHours() + 2);
    return {
        startDate: startDate,
        endDate: endDate
    };
}