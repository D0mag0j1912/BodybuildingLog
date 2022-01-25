import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';

@Pipe({
    name: 'newTraining',
})
export class NewTrainingPipe implements PipeTransform {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) {}

    transform(
        _value: Observable<Exercise[]>,
        index: number,
        _exerciseChanged: boolean,
    ): Observable<Exercise[]> {
        return this.newTrainingService.currentTrainingChanged$
            .pipe(
                take(1),
                map((training: Training) => training.exercise[index]?.availableExercises ?? []),
        );
    }

}
