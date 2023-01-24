import { Pipe, PipeTransform } from '@angular/core';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { SingleExercise } from '../../../models/training/new-training/single-exercise/single-exercise.model';

@Pipe({ name: 'filterAvailableExercises' })
export class FilterAvailableExercisesPipe implements PipeTransform {
    transform(currentExerciseState: SingleExercise[], index: number): Exercise[] {
        return currentExerciseState[index].availableExercises;
    }
}
