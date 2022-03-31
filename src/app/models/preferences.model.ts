
export interface Preferences {
    UserId?: string;
    LanguageCode?: LanguageCode;
    WeightFormat?: WeightFormat;
    //TODO: Training: { showTrainingsBy?: 'week' | 'day' }
}

export type LanguageCode = 'en' | 'hr';

export type WeightFormat = 'lbs' | 'kg';

export const DEFAULT_WEIGHT_FORMAT: WeightFormat = 'kg';
