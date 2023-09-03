import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';
import { MuscleGroupsType } from '../../common/muscle-groups.type';
import { SearchParams } from '../../common/search-params';

export interface PastTrainings {
    Trainings: NewTraining[];
    Dates: {
        StartDate: string;
        EndDate: string;
    };
    IsPrevious: boolean;
    IsNext: boolean;
    EarliestTrainingDate: string;
    DayName: string;
    Message?: string;
}

export interface DateInterval {
    StartDate: Date;
    EndDate: Date;
}

export interface PastTrainingsQueryParams {
    startDate?: string;
    endDate?: string;
    search?: string;
    page?: string;
    perPage?: string;
    showBy?: PeriodFilterType;
    muscleGroups?: MuscleGroupsType[];
}

export type PastTrainingsPayloadType = {
    currentDate?: string;
    periodFilterType?: PeriodFilterType;
    searchData?: SearchParams;
    muscleGroups?: MuscleGroupsType[];
};

export type PeriodFilterType = 'week' | 'day';
