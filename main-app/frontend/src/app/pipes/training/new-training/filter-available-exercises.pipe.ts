import { Pipe, PipeTransform } from '@angular/core';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { SingleExerciseDto as SingleExercise } from '../../../../api/models/single-exercise-dto';

@Pipe({ name: 'filterAvailableExercises' })
export class FilterAvailableExercisesPipe implements PipeTransform {
    transform(currentExerciseState: SingleExercise[], index: number): Exercise[] {
        return currentExerciseState[index]?.availableExercises ?? [];
    }
}
