import { PreferencesDto } from '../preferences/preferences.model';

export interface AuthResponse {
    readonly message: string;
    readonly success?: boolean;
    readonly token?: string;
    readonly expiresIn?: number;
    readonly _id?: string;
    readonly preferences?: PreferencesDto;
}