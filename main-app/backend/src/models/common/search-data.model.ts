import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SearchDataDto {
    @ApiProperty({
        type: Number,
    })
    @IsNotEmpty()
    page: number;

    @ApiProperty({
        type: Number,
    })
    @IsNotEmpty()
    size: number;

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    @IsLowercase()
    searchText?: string;
}
