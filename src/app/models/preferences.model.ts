
export interface Preferences {
    userId?: string;
    language?: Language;
    weightFormat?: WeightFormat;
}

export type Language = 'en' | 'hr';

export type WeightFormat = 'lbs' | 'kg';
