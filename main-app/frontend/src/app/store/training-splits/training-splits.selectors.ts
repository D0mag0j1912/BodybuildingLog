import { createFeatureSelector } from '@ngrx/store';
import { FeatureKeys } from '../../constants/enums/feature-keys.enum';

export const trainingSplits = createFeatureSelector(FeatureKeys.TRAINING_SPLITS);
