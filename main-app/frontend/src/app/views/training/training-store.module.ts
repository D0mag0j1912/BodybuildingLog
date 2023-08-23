import { NgModule } from '@angular/core';
import { StoreModule, combineReducers, createFeatureSelector } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as TrainingSplitsReducer from '../../store/training-splits/reducers/training-splits.reducers';
import * as TrainingsCommonReducer from '../../store/common/reducers/common.reducers';
import * as PastTrainingsReducer from '../../store/past-trainings/reducers/past-trainings.reducer';
import { TrainingSplitsState } from '../../store/training-splits/reducers/training-splits.reducers';
import { PastTrainingsState } from '../../store/past-trainings/reducers/past-trainings.reducer';
import { TrainingsCommonState } from '../../store/common/reducers/common.reducers';
import { FeatureKeys } from '../../constants/enums/feature-keys.enum';
import { TrainingSplitsEffects } from '../../store/training-splits/effects/training-splits.effects';

export const trainingsStoreFeatureKey = 'trainingsStore';

export interface TrainingsState {
    [FeatureKeys.TRAINING_SPLITS]: TrainingSplitsState;
    [FeatureKeys.PAST_TRAININGS]: PastTrainingsState;
    [FeatureKeys.TRAININGS_COMMON]: TrainingsCommonState;
}

export const trainingsReducers = combineReducers({
    [FeatureKeys.TRAINING_SPLITS]: TrainingSplitsReducer.trainingSplitsReducer,
    [FeatureKeys.PAST_TRAININGS]: PastTrainingsReducer.pastTrainingsReducer,
    [FeatureKeys.TRAININGS_COMMON]: TrainingsCommonReducer.trainingsCommonReducer,
});

export const selectTrainingsState = createFeatureSelector<TrainingsState>(trainingsStoreFeatureKey);

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature(trainingsStoreFeatureKey, trainingsReducers),
        EffectsModule.forFeature([TrainingSplitsEffects]),
    ],
    exports: [],
})
export class TrainingStoreModule {}
