import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsEmail,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length } from 'class-validator';
import { Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const USER_SCHEMA = new Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
});

USER_SCHEMA.plugin(uniqueValidator);

export class UserDto {
    
    @ApiProperty({ required: false })
    @IsOptional()
    @IsDefined()
    @IsMongoId()
    _id: string;
    
    @ApiProperty()
    @IsEmail({}, {
        message: 'auth.errors.invalid_email',
    })
    @IsNotEmpty({
        message: 'auth.errors.email_required',
    })
    email: string;

    @ApiProperty()
    @Length(6, 20, {
        message: 'auth.errors.password_length',
    })
    @IsString({
        message: 'auth.errors.password_string',
    })
    @IsNotEmpty({
        message: 'auth.errors.password_required',
    })
    password: string;
}