import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PaginatorParamsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Page: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Size: number;
}
