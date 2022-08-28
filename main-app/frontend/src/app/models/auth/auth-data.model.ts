export interface AuthModel {
    readonly email: string;
    readonly password: string;
    readonly confirmPassword?: string;
}

export interface AuthResponseData {
    readonly Message?: string;
    readonly Success?: boolean;
    readonly Token?: string;
    readonly ExpiresIn?: number;
    readonly ExpirationDate?: Date;
    readonly _id?: string;
}
