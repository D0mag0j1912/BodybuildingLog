import { SetCategoryType } from './new-training/single-exercise/set/set.type';

export interface Exercise {
    name: string;
    imageUrl: string;
    primaryMuscleGroup: string;
    availableSetCategories: SetCategoryType[];
    selectedSetCategories: SetCategoryType[];
    _id?: string;
}
