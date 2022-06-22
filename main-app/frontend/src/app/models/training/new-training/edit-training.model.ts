import { Exercise } from '../exercise.model';
import { SingleExercise } from '../shared/single-exercise.model';
import { Training } from './training.model';

export type EditNewTrainingData = {
    editedDate?: string | Date;
    editTraining?: Training;
};
