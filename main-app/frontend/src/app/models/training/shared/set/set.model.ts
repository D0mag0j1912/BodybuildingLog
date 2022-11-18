import { SetCategoryType, SetChangedType } from './set.type';

export interface Set {
    setNumber: number;
    weightLifted?: number;
    reps?: number;
    _id?: string;
}

export interface SetTrainingData {
    exerciseName: string;
    weightLifted: number;
    reps: number;
    setNumber?: number;
    total?: number;
}

export interface SelectedCategoriesChanged {
    setChangedType: SetChangedType;
    setCategory?: SetCategoryType;
    setIndex?: number;
}
