import { combineReducers } from '@ngrx/store';
import {
    TrainingsState,
    trainingsStoreFeatureKey,
    trainingsReducers,
} from './views/training/training-store.module';

export const appReducers = combineReducers({
    ...trainingsReducers,
});

export interface AppState {
    [trainingsStoreFeatureKey]: TrainingsState;
}
