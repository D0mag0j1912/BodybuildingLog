import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { DeleteTrainingMetaDto } from './delete-training-action.model';

export class DeleteTrainingActionRequestDto {
    @ApiProperty({ type: DeleteTrainingMetaDto })
    @IsNotEmpty()
    deleteTrainingMeta: DeleteTrainingMetaDto;
}
