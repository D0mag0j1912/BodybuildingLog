import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/new-training/single-exercise.model';

@Injectable()
export class DuplicateExercisePipe implements PipeTransform {

    transform(newTraining: NewTrainingDto): NewTrainingDto {
        const exerciseNames: string[] = [];
        for (const exercise of (newTraining.exercise as SingleExercise[])) {
            if (exerciseNames.indexOf(exercise.exerciseName) !== -1) {
                throw new BadRequestException('training.new_training.errors.exercise_name_duplicate');
            }
            else {
                exerciseNames.push(exercise.exerciseName);
            }
        }
        return newTraining;
    }
}