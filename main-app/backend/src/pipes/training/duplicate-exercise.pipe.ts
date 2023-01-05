import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';

@Injectable()
export class DuplicateExercisePipe implements PipeTransform {
    transform(newTraining: NewTrainingDto): NewTrainingDto {
        const exerciseNames: string[] = [];
        for (const exercise of newTraining?.exercises ?? []) {
            if (exerciseNames.indexOf(exercise.exerciseData.name) !== -1) {
                throw new BadRequestException(
                    'training.new_training.errors.exercise_name_duplicate',
                );
            } else {
                exerciseNames.push(exercise.exerciseData.name);
            }
        }
        return newTraining;
    }
}
