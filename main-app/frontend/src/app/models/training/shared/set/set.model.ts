import { SetCategoryType, SetChangedType } from './set.type';

export interface Set {
    setNumber: number;
    weight?: number;
    reps?: number;
    _id?: string;
}

export interface SetTrainingData {
    exerciseName: string;
    weight: number;
    reps: number;
    setNumber?: number;
    total?: number;
}

export interface SelectedCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
