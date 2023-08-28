import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DateIntervalDto {
    @ApiProperty({
        type: Date,
        required: true,
        title: 'Start date',
    })
    @IsNotEmpty()
    StartDate: Date;

    @ApiProperty({
        type: Date,
        required: true,
        title: 'End date',
    })
    @IsNotEmpty()
    EndDate: Date;
}
