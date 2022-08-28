import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightUnit } from './preferences.type';

export interface Preferences {
    readonly userId?: string;
    readonly languageCode?: LanguageCode;
    readonly weightUnit?: WeightUnit;
    readonly showByPeriod?: PeriodFilterType;
}
