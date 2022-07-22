import { BadRequestException, PipeTransform } from '@nestjs/common';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/new-training/single-exercise.model';

export class EmptySetPipe implements PipeTransform {

    transform(training: NewTraining): NewTraining {
        const areSetsEmpty = training?.exercises?.find((x: SingleExercise) => x?.sets?.length === 0);
        if (areSetsEmpty) {
            throw new BadRequestException('training.new_training.errors.at_least_one_set');
        }
        return training;
    }
}