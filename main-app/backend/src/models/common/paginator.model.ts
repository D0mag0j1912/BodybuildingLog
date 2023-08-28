import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { PaginatorParamsDto } from './paginator-params.model';

export class PaginatorDto<T> {
    @ApiPropertyOptional({
        type: PaginatorParamsDto,
        required: false,
        title: 'Next page data',
    })
    @IsOptional()
    Next?: PaginatorParamsDto;

    @ApiPropertyOptional({
        type: PaginatorParamsDto,
        required: false,
        title: 'Previous page data',
    })
    @IsOptional()
    Previous?: PaginatorParamsDto;

    @ApiPropertyOptional({
        type: Number,
        required: false,
        title: 'Current page',
    })
    @IsOptional()
    @IsNumber()
    CurrentPage?: number;

    @ApiPropertyOptional({
        type: Number,
        required: false,
        title: 'Per page',
    })
    @IsOptional()
    @IsNumber()
    PerPage?: number;

    @ApiPropertyOptional({
        type: Number,
        required: false,
        title: 'Total count of results',
    })
    @IsOptional()
    @IsNumber()
    TotalCount?: number;

    @ApiPropertyOptional({
        type: Number,
        required: false,
        title: 'Total number of pages',
    })
    @IsOptional()
    @IsNumber()
    TotalPages?: number;

    Results?: T;
}
