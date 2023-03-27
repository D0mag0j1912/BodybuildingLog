import { Pipe, PipeTransform } from '@angular/core';
import { CustomTrainingDto as CustomTraining } from '../../../../../api/models/custom-training-dto';

@Pipe({ name: 'timesAWeek' })
export class TimesAWeekPipe implements PipeTransform {
    transform(trainings: CustomTraining[]) {
        return trainings.filter((training: CustomTraining) => training.exercises.length).length;
    }
}
