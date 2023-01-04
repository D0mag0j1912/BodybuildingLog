import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GeneralResponseDto {
    @ApiProperty({
        description: 'Message returned by server to client',
    })
    @IsNotEmpty()
    @IsString()
    Message: string;
}

export interface StreamData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}
