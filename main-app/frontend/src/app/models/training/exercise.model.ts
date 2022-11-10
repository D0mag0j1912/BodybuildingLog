import { Translations } from '../common/translations.model';
import { SetCategoryType } from './shared/set.type';

export interface Exercise {
    name: string;
    imageUrl: string;
    primaryMuscleGroup: string;
    translations: Translations;
    availableSetCategories: SetCategoryType[];
    selectedSetCategories?: SetCategoryType[];
    _id?: string;
}
