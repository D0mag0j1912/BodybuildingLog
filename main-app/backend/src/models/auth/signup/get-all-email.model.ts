import { ApiProperty } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class GetAllEmailsDto {
    @ApiProperty({
        description: 'Email',
        example: 'john.doe@gmail.com',
    })
    @IsNotEmpty()
    @IsString()
    @IsLowercase()
    email: string;
}
