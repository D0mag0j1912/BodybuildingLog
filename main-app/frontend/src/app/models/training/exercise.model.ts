import { Translations } from '../common/translations.model';
import { SetCategoryType } from './shared/set.type';

export interface Exercise {
    readonly name: string;
    readonly imageUrl: string;
    readonly primaryMuscleGroup: string;
    readonly setCategory: SetCategoryType[];
    readonly translations: Translations;
    readonly _id?: string;
}
