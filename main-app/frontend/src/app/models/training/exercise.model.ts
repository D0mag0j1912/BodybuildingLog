import { Translations } from '../common/translations.model';
import { SetCategoryType } from './shared/set.type';

export interface Exercise {
    name: string;
    imageUrl: string;
    primaryMuscleGroup: string;
    availableSetCategories: SetCategoryType[];
    translations: Translations;
    _id?: string;
}
