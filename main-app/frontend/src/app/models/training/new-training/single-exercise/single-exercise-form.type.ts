import { FormControl, FormGroup } from '@angular/forms';
import { FormType } from '../../../common/form.type';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { SingleExercise } from './single-exercise.model';

export type SingleExerciseFormType = {
    [P in keyof Pick<FormType<SingleExercise>, 'exerciseData'>]: FormGroup<ExerciseFormType>;
};

export type ExerciseValueType = Partial<
    Pick<
        Exercise,
        | 'name'
        | 'imageUrl'
        | 'primaryMuscleGroup'
        | 'selectedSetCategories'
        | 'availableSetCategories'
    >
>;

export type ExerciseFormType = {
    [P in keyof ExerciseValueType]: FormControl<ExerciseValueType[P]>;
};
