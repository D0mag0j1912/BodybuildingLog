import { startOfWeek, endOfWeek } from "date-fns";
import { DateInterval } from "../models/training/past-trainings/past-trainings.model";

export const isValidDate = (dateStr: string): boolean => !isNaN(new Date(dateStr).getDate());

export const constructDates = (date: Date): DateInterval => {
    const startDate: Date = startOfWeek(date, {
        weekStartsOn: 1,
    });
    const endDate: Date = endOfWeek(date, {
        weekStartsOn: 1,
    });
    return {
        StartDate: startDate,
        EndDate: endDate,
    } as DateInterval;
};
