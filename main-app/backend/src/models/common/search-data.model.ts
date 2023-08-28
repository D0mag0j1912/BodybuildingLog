import { ApiProperty } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchDataDto {
    @ApiProperty({
        type: Number,
        title: 'Current page',
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    page: number;

    @ApiProperty({
        type: Number,
        title: 'Per page',
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    perPage: number;

    @ApiProperty({
        type: String,
        title: 'Search text',
        required: true,
    })
    @IsString()
    @IsLowercase()
    searchText: string;
}
