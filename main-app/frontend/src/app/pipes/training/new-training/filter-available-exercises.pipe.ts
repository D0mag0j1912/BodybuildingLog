import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { NewTrainingStoreService } from '../../../services/store/training/new-training-store.service';

@Pipe({ name: 'filterAvailableExercises' })
export class NewTrainingPipe implements PipeTransform {
    constructor(private readonly newTrainingStoreService: NewTrainingStoreService) {}

    transform(_value: Observable<Exercise[]>, index: number): Observable<Exercise[]> {
        return this.newTrainingStoreService.currentTrainingChanged$.pipe(
            take(1),
            map((training: NewTraining) => training.exercises[index]?.availableExercises ?? []),
        );
    }
}
