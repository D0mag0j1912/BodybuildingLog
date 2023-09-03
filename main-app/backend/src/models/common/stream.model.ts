import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class StreamModelDto<T> {
    @ApiProperty({
        type: Boolean,
        required: true,
        description: 'Property which indicates whether content is loading',
    })
    @IsNotEmpty()
    @IsBoolean()
    IsLoading: boolean;

    @ApiProperty({
        type: Boolean,
        required: true,
        description: 'Property which indicates whether error happened',
    })
    @IsNotEmpty()
    @IsBoolean()
    IsError: boolean;

    Value?: T;
}
