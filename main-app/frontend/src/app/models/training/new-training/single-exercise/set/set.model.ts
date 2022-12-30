import { SetCategoryType, SetChangedType } from './set.type';

export interface Set {
    setNumber: number;
    weight?: number;
    reps?: number;
    duration?: number;
    _id?: string;
}

export interface SelectedSetCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
