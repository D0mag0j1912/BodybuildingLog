import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Training } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/new-training/single-exercise.model';

export class EmptySetPipe implements PipeTransform {

    transform(training: Training): Training {
        const areSetsEmpty = training?.exercise?.find((x: SingleExercise) => x?.sets?.length === 0);
        if (areSetsEmpty) {
            throw new BadRequestException('training.new_training.errors.at_least_one_set');
        }
        return training;
    }
}