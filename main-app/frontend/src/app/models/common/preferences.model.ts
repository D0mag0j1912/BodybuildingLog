import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightUnit } from './preferences.type';

export interface Preferences {
    userId?: string;
    languageCode?: LanguageCode;
    weightFormat?: WeightUnit;
    showByPeriod?: PeriodFilterType;
}
