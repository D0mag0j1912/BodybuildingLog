import { endOfWeek, startOfWeek } from 'date-fns';
import { max, min } from 'date-fns';
import { NewTrainingDto } from '../models/training/new-training/new-training.model';

export interface DateInterval {
    readonly startDate: Date;
    readonly endDate: Date;
}

export function getIntervalDate(currentDateOrTrainings: Date | NewTrainingDto[]): DateInterval {
    let minDate: Date;
    let maxDate: Date;
    if (Array.isArray(currentDateOrTrainings)) {
        const dates: Date[] = currentDateOrTrainings.map((x: NewTrainingDto) => x.createdAt);
        minDate = min(dates);
        maxDate = max(dates);
    }
    else {
        minDate = startOfWeek(currentDateOrTrainings, { weekStartsOn: 1 });
        maxDate = endOfWeek(currentDateOrTrainings, { weekStartsOn: 1 });
    }
    return {
        startDate: minDate,
        endDate: maxDate,
    } as DateInterval;
}