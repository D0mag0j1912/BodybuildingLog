import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';

@Injectable({ providedIn: 'root' })
export class ExercisesStoreService {
    private _allExercisesState$ = new BehaviorSubject<StreamData<Exercise[]>>(null);
    allExercisesState$ = this._allExercisesState$.asObservable();

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesState$.next(exercises);
    }
}
