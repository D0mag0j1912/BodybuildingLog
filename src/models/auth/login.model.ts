import { 
    IsDefined, 
    IsEmail,
    IsNotEmpty,
    IsOptional, 
    IsString, 
    Length } from "class-validator";
import { Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.plugin(uniqueValidator);

export class Login {

    @IsOptional()
    @IsDefined()
    _id: string;
    
    @IsEmail({}, {
        message: 'auth.errors.invalid_email'
    })
    @IsNotEmpty({
        message: 'auth.errors.email_required'
    })
    email: string;

    @Length(6, 20, {
        message: 'auth.errors.password_length'
    })
    @IsString({
        message: 'auth.errors.password_string'
    })
    @IsNotEmpty({
        message: 'auth.errors.password_required'
    })
    password: string;
}