import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GeneralResponseDto {
    @ApiProperty({
        description: 'Message returned by server to the client',
    })
    @IsNotEmpty()
    @IsString()
    Message: string;
}
