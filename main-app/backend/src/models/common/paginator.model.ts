import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export interface Paginator<T> {
    Results?: T;
    Next?: PaginatorParams;
    Previous?: PaginatorParams;
    CurrentPage?: number;
    Size?: number;
    TotalCount?: number;
    TotalPages?: number;
}

export interface PaginatorParams {
    Page: number;
    Size: number;
}

export class SearchDataDto {
    @ApiProperty()
    @IsNotEmpty()
    page: number;

    @ApiProperty()
    @IsNotEmpty()
    size: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsLowercase()
    searchValue?: string;
}
