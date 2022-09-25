export type SetConstituent = 'weightLifted' | 'reps';

export type SetConstituentExistsType = Readonly<Record<SetConstituent, boolean>> & {
    indexExercise?: number;
};

export type SetCategoryType =
    | 'dynamicBodyweight'
    | 'dynamicWeighted'
    | 'staticBodyweight'
    | 'staticWeighted'
    | 'freeWeighted';
