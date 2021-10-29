import { Preferences } from '../preferences.model';

export interface Signup {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface AuthResponseData {
    message?: string;
    success?: boolean;
    token?: string;
    expiresIn?: number;
    expirationDate?: Date;
    _id?: string;
    preferences?: Preferences;
}
