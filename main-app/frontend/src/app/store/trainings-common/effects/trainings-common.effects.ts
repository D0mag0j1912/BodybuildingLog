import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as TrainingsCommonActions from '../actions/trainings-common.actions';
import { SwaggerTrainingService } from '../../../../api';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { CommonFacadeService } from '../../common/common-facade.service';

@Injectable()
export class TrainingsCommonEffects {
    getExercises$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingsCommonActions.getExercises),
            switchMap((_) =>
                this._swaggerExerciseService.getExercisesControllerGetExercises().pipe(
                    catchError((_) => {
                        this._commonFacadeService.showToastMessage(
                            'danger',
                            'training.new_training.errors.exercises_not_available',
                        );
                        return EMPTY;
                    }),
                    map((exercises: StreamData<Exercise[]>) =>
                        TrainingsCommonActions.setExercises({ exercises }),
                    ),
                ),
            ),
        ),
    );

    constructor(
        private _actions$: Actions,
        private _swaggerExerciseService: SwaggerTrainingService,
        private _commonFacadeService: CommonFacadeService,
    ) {}
}
