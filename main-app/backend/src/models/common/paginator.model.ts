import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { PaginatorParamsDto } from './paginator-params.model';

export class PaginatorDto<T> {
    @ApiPropertyOptional({ type: PaginatorParamsDto })
    @IsOptional()
    Next?: PaginatorParamsDto;

    @ApiPropertyOptional({ type: PaginatorParamsDto })
    @IsOptional()
    Previous?: PaginatorParamsDto;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    CurrentPage?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    PerPage?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    TotalCount?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    TotalPages?: number;

    Results?: T;
}
