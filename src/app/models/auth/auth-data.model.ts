import { Preferences } from '../preferences.model';

export interface Signup {
    readonly email: string;
    readonly password: string;
    readonly confirmPassword: string;
}

export interface Login {
    readonly email: string;
    readonly password: string;
}

export interface AuthResponseData {
    readonly message?: string;
    readonly success?: boolean;
    readonly token?: string;
    readonly expiresIn?: number;
    readonly expirationDate?: Date;
    readonly _id?: string;
    readonly preferences?: Preferences;
}
