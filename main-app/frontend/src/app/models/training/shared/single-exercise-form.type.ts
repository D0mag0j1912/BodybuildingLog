import { ModelWithoutIdType } from '../../common/raw.model';
import { Exercise } from '../exercise.model';
import { SingleExercise } from './single-exercise.model';

export type SingleExerciseFormControlType = {
    [P in keyof Pick<SingleExercise, 'sets' | 'total'>]: SingleExercise[P];
};

export type SingleExerciseFormGroupType = Pick<SingleExercise, 'exerciseData'>;

export type FormControlExerciseData = ModelWithoutIdType<Exercise>;
