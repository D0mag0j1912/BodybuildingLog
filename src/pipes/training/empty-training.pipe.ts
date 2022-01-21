import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Training } from '../../models/training/new-training/new-training.model';

@Injectable()
export class EmptyTrainingPipe implements PipeTransform {

    transform(training: Training): Training {
        const numberOfExercises = training?.exercise?.length;
        if (numberOfExercises && numberOfExercises > 0) {
            return training;
        }
        throw new BadRequestException('training.new_training.errors.at_least_one_exercise');
    }
}