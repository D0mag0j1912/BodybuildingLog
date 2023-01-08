import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DateIntervalDto {
    @ApiProperty()
    @IsNotEmpty()
    StartDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    EndDate: Date;
}
