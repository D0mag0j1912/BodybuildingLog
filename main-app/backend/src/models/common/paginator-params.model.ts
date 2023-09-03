import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PaginatorParamsDto {
    @ApiProperty({
        type: Number,
        required: true,
        title: 'Page',
    })
    @IsNotEmpty()
    @IsNumber()
    Page: number;

    @ApiProperty({
        type: Number,
        required: true,
        title: 'Per page',
    })
    @IsNotEmpty()
    @IsNumber()
    PerPage: number;
}
