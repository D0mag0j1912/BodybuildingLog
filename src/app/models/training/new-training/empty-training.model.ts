import { Training } from './new-training.model';

export type EditNewTrainingData = {
    _id?: string;
    editedDate?: Date;
    editTraining?: Training;
};

export const EMPTY_TRAINING: Training = {
    exercise: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
};

export const EMPTY_TRAINING_EDIT: EditNewTrainingData = {
    _id: null,
    editedDate: null,
    editTraining: null,
};
