import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Training } from '../../models/training/new-training/training.model';

@Injectable()
export class DuplicateExercisePipe implements PipeTransform {

    transform(newTraining: Training): Training {
        const exerciseNames: string[] = [];
        for (const exercise of (newTraining?.exercises ?? [])) {
            if (exerciseNames.indexOf(exercise.exerciseInfo.Name) !== -1) {
                throw new BadRequestException('training.new_training.errors.exercise_name_duplicate');
            }
            else {
                exerciseNames.push(exercise.exerciseInfo.Name);
            }
        }
        return newTraining;
    }
}