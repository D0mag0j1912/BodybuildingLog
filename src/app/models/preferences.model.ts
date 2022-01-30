
export interface Preferences {
    userId?: string;
    language?: Language;
    weightFormat?: WeightFormat;
    //TODO: Training: { showTrainingsBy?: 'week' | 'day' }
}

export type Language = 'en' | 'hr';

export type WeightFormat = 'lbs' | 'kg';

export const DEFAULT_WEIGHT_FORMAT: WeightFormat = 'kg';
