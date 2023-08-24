import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TrainingsState } from '../../views/training/training-store.module';
import * as TrainingsCommonActions from '../trainings-common/actions/trainings-common.actions';
import { ExerciseDto as Exercise } from '../../../api/models/exercise-dto';
import { StreamData } from '../../models/common/common.model';
import { selectExercises } from './selectors/trainings-common.selectors';

@Injectable({ providedIn: 'root' })
export class TrainingsCommonFacadeService {
    private _selectExercises$ = this._store.select(selectExercises);

    constructor(private _store: Store<TrainingsState>) {}

    //Actions BEGIN --------------------------
    getExercises(): void {
        this._store.dispatch(TrainingsCommonActions.getExercises());
    }
    //Actions END ---------------------------

    //SELECTORS BEGIN -----------------------
    selectExercises(): Observable<StreamData<Exercise[]>> {
        return this._selectExercises$;
    }
    //SELECTORS END -----------------------
}
