import { SetCategoryType, SetChangedType } from './set.type';

export interface Set {
    setNumber: number;
    weight?: number;
    reps?: number;
    duration?: number;
}

export interface SelectedCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
