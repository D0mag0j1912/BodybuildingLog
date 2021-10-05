import { Preferences } from "../preferences/preferences.model";

export interface AuthResponse {
    message: string;
    success?: boolean;
    token?: string;
    expiresIn?: number;
    _id?: string;
    preferences?: Preferences;
}