import { SetDurationUnitType } from '../training/new-training/single-exercise/set/set.type';
import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCodeType, WeightUnitType } from './preferences.type';

export interface Preferences {
    userId: string;
    languageCode: LanguageCodeType;
    weightUnit: WeightUnitType;
    showByPeriod: PeriodFilterType;
    setDurationUnit: SetDurationUnitType;
}
