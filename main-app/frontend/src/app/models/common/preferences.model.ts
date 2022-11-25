import { SetDurationUnit } from '../training/new-training/single-exercise/set/set.type';
import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightUnit } from './preferences.type';

export interface Preferences {
    userId: string;
    languageCode: LanguageCode;
    weightUnit: WeightUnit;
    showByPeriod: PeriodFilterType;
    setDurationUnit: SetDurationUnit;
}
