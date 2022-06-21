import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/training.model';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';

@Pipe({ name: 'newTraining' })
export class NewTrainingPipe implements PipeTransform {

    constructor(
        private readonly trainingStoreService: TrainingStoreService,
    ) { }

    transform(
        _value: Observable<Exercise[]>,
        index: number,
        _exerciseChanged: boolean,
    ): Observable<Exercise[]> {
        return this.trainingStoreService.currentTrainingChanged$
            .pipe(
                take(1),
                map((training: Training) => training.exercises[index]?.availableExercises ?? []),
        );
    }

}
