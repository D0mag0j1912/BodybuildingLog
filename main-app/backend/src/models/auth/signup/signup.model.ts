import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignupDto {
    @ApiProperty({
        description: 'Email entered by user during registration',
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
        description: 'Password entered by user during registration',
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

    @ApiProperty({
        description: 'Password entered by user during registration',
        example: 'Password@123',
    })
    @Length(6, 20, {
        message: 'auth.errors.confirm_password_length',
    })
    @IsString({
        message: 'auth.errors.confirm_password_string',
    })
    @IsNotEmpty({
        message: 'auth.errors.confirm_password_required',
    })
    confirmPassword: string;
}
