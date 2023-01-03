import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsDefined,
    IsEmail,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
} from 'class-validator';
import { Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const USER_SCHEMA = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

USER_SCHEMA.plugin(uniqueValidator);

export class UserDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsDefined()
    @IsMongoId()
    _id: string;

    @ApiProperty({
        description: 'The email address of the user',
        example: 'john.doe@gmail.com',
    })
    @IsEmail(
        {},
        {
            message: 'auth.errors.invalid_email',
        },
    )
    @IsNotEmpty({
        message: 'auth.errors.email_required',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'Password@123',
    })
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
