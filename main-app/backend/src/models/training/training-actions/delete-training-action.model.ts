import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { SearchDataDto } from '../../common/paginator.model';

export class DeleteTrainingMetaDto {
    @ApiPropertyOptional({ type: SearchDataDto })
    @IsOptional()
    searchData: SearchDataDto;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    currentDate: Date;
}
