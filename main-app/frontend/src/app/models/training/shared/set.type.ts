export type SetConstituent = 'weightLifted' | 'reps';

export type SetConstituentExistsType = Record<SetConstituent, boolean>;

export type SetCategoryType =
    | 'dynamicBodyweight'
    | 'dynamicWeighted'
    | 'staticBodyweight'
    | 'staticWeighted'
    | 'freeWeighted';
