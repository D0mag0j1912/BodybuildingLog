import { PreferencesDto } from '../preferences/preferences.model';

export interface AuthResponse {
    readonly Message: string;
    readonly Success?: boolean;
    readonly Token?: string;
    readonly ExpiresIn?: number;
    readonly _id?: string;
    readonly Preferences?: PreferencesDto;
}