import { SetCategoryType, SetChangedType, SetDurationUnit } from './set.type';

export interface Set {
    setNumber: number;
    weight?: number;
    reps?: number;
    duration?: number;
    _id?: string;
    setPreferences?: SetPreferences;
}

export interface SetPreferences {
    setDurationUnit: SetDurationUnit;
}

export interface SelectedCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
