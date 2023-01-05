import { OmitType } from '@nestjs/swagger';
import { NewTrainingDto } from './new-training.model';

export class RawNewTrainingDto extends OmitType(NewTrainingDto, ['_id'] as const) {}
