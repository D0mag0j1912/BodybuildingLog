import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightFormat } from '../types/preferences.type';

export interface Preferences {
    UserId?: string;
    LanguageCode?: LanguageCode;
    WeightFormat?: WeightFormat;
    ShowByPeriod?: PeriodFilterType;
}
