import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Translations {
    @ApiProperty({
        description: 'English translation',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    en: string;

    @ApiProperty({
        description: 'Croatian translation',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    hr: string;
}
