import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class GetAllEmails {
    @IsNotEmpty()
    @IsString()
    @IsLowercase()
    email: string;
}
