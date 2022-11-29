import { Set } from './set.model';

export type SetConstituent = 'weight' | 'reps' | 'duration';

export type SetConstituentExistsType = Partial<Readonly<Record<SetConstituent, boolean>>>;

export type SetCategoryType =
    | 'dynamicBodyweight'
    | 'dynamicWeighted'
    | 'staticBodyweight'
    | 'staticWeighted'
    | 'freeWeighted';

export type SetChangedType = 'addSet' | 'updateSet' | 'deleteSet';

export type SetDurationUnit = 'seconds' | 'minutes';

export type SetTrainingData = {
    exerciseName: string;
    total?: number;
} & Required<Set>;
