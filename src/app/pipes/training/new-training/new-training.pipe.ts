import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/training.model';
import { NewTrainingStateService } from '../../../services/state/new-training-state.service';

@Pipe({ name: 'newTraining' })
export class NewTrainingPipe implements PipeTransform {

    constructor(
        private readonly newTrainingStateService: NewTrainingStateService,
    ) { }

    transform(
        _value: Observable<Exercise[]>,
        index: number,
        _exerciseChanged: boolean,
    ): Observable<Exercise[]> {
        return this.newTrainingStateService.currentTrainingChanged$
            .pipe(
                take(1),
                map((training: Training) => training.exercises[index]?.availableExercises ?? []),
        );
    }

}
