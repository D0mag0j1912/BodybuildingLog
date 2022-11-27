import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { Exercise } from '../../../models/training/exercise.model';

@Injectable({ providedIn: 'root' })
export class ExercisesStoreService {
    private _allExercisesState$ = new BehaviorSubject<StreamData<Exercise[]>>(null);
    allExercisesState$ = this._allExercisesState$.asObservable();

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesState$.next(exercises);
    }
}
