export type SetConstituent = 'weight' | 'reps';

export type SetConstituentExistsType = Readonly<Record<SetConstituent, boolean>>;

export type SetCategoryType =
    | 'dynamicBodyweight'
    | 'dynamicWeighted'
    | 'staticBodyweight'
    | 'staticWeighted'
    | 'freeWeighted';

export type SetChangedType = 'addSet' | 'updateSet' | 'deleteSet';
