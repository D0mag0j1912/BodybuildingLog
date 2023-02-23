import { SetCategoryType, SetChangedType } from './set.type';

export interface SelectedSetCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
