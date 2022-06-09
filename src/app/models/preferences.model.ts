
export interface Preferences {
    UserId?: string;
    LanguageCode?: LanguageCode;
    WeightFormat?: WeightFormat;
}

export type PreferenceChangedType = 'language' | 'showByPeriod';

export type LanguageCode = 'en' | 'hr';

export type WeightFormat = 'lbs' | 'kg';

export const DEFAULT_WEIGHT_FORMAT: WeightFormat = 'kg';
