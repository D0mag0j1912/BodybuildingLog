import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, from } from 'rxjs';
import { Storage } from '@capacitor/storage';
import * as TrainingsCommonActions from '../actions/trainings-common.actions';
import { SwaggerTrainingService } from '../../../../api';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { CommonFacadeService } from '../../common/common-facade.service';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { NewTrainingStoreService } from '../../../services/store/training/new-training-store.service';

@Injectable()
export class TrainingsCommonEffects {
    getExercises$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TrainingsCommonActions.getExercises),
            withLatestFrom(this._authStoreService.loggedUser$),
            switchMap(([action, authData]) =>
                this._swaggerExerciseService.getExercisesControllerGetExercises().pipe(
                    catchError((_) => {
                        this._commonFacadeService.showToastMessage(
                            'danger',
                            'training.new_training.errors.exercises_not_available',
                        );
                        return EMPTY;
                    }),
                    switchMap((exercises: StreamData<Exercise[]>) =>
                        from(Storage.get({ key: StorageItems.TRAINING_STATE })).pipe(
                            map((storedData) => {
                                if (!storedData || !storedData?.value) {
                                    this._newTrainingStoreService.updateTrainingState(
                                        'getExercises',
                                        {
                                            trainingState: undefined,
                                            exercises: exercises.Value,
                                            userId: authData._id,
                                        },
                                    );
                                }
                                return exercises;
                            }),
                        ),
                    ),
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
        private _authStoreService: AuthStoreService,
        private _newTrainingStoreService: NewTrainingStoreService,
    ) {}
}
