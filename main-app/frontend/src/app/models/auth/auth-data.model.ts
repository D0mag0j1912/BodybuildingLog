export interface Signup {
    readonly email: string;
    readonly password: string;
    readonly confirmPassword: string;
}

export interface Login {
    readonly Email: string;
    readonly Password: string;
}

export interface AuthResponseData {
    readonly Message?: string;
    readonly Success?: boolean;
    readonly Token?: string;
    readonly ExpiresIn?: number;
    readonly ExpirationDate?: Date;
    readonly _id?: string;
}
