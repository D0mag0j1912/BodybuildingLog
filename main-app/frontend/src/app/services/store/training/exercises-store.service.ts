import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { Exercise } from '../../../models/training/exercise.model';

@Injectable({ providedIn: 'root' })
export class ExercisesStoreService {
    private readonly _allExercisesState$: BehaviorSubject<StreamData<Exercise[]>> =
        new BehaviorSubject<StreamData<Exercise[]>>(null);
    readonly allExercisesState$: Observable<StreamData<Exercise[]>> =
        this._allExercisesState$.asObservable();

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesState$.next(exercises);
    }
}
