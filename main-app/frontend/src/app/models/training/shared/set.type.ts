export type SetConstituent = 'weightLifted' | 'reps';

export type SetConstituentExistsType = Readonly<Record<SetConstituent, boolean>>;

export type SetCategoryType =
    | 'dynamicBodyweight'
    | 'dynamicWeighted'
    | 'staticBodyweight'
    | 'staticWeighted'
    | 'freeWeighted';
