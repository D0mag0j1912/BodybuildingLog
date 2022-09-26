import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '../../../models/training/exercise.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';

@Pipe({ name: 'filterAvailableExercises' })
export class FilterAvailableExercisesPipe implements PipeTransform {
    transform(currentExerciseState: SingleExercise[], index: number): Exercise[] {
        return currentExerciseState[index].availableExercises;
    }
}
