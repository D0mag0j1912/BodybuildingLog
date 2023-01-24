import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { Set } from './set/set.model';

export interface SingleExercise {
    exerciseData: Exercise;
    sets: Set[];
    total: number;
    availableExercises: Exercise[];
    _id?: string;
}
