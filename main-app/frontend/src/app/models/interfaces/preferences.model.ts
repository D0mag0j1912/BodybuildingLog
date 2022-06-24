import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightFormat } from '../common/types/preferences.type';

export interface Preferences {
    userId?: string;
    languageCode?: LanguageCode;
    weightFormat?: WeightFormat;
    showByPeriod?: PeriodFilterType;
}
