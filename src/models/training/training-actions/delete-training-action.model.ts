import { IsDate, IsOptional } from 'class-validator';
import { SearchDataDto } from '../../common/paginator.model';

export class DeleteTrainingMetaDto {

    @IsOptional()
    searchData: SearchDataDto;

    @IsOptional()
    @IsDate()
    currentDate: Date;
}