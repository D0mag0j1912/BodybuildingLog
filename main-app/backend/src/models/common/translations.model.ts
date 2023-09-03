import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Translations {
    @ApiProperty({
        required: true,
        description: 'English translation',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    en: string;

    @ApiProperty({
        required: true,
        description: 'Croatian translation',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    hr: string;
}
