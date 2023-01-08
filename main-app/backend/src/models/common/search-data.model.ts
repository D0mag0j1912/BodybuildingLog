import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
