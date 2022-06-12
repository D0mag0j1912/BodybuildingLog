import { PeriodFilterType } from './training/past-trainings/past-trainings.model';

export interface Preferences {
    UserId?: string;
    LanguageCode?: LanguageCode;
    WeightFormat?: WeightFormat;
    ShowByPeriod?: PeriodFilterType;
}

export type PreferenceChangedType = 'language' | 'showByPeriod';

export type LanguageCode = 'en' | 'hr';

export type WeightFormat = 'lbs' | 'kg';

export const DEFAULT_WEIGHT_FORMAT: WeightFormat = 'kg';
