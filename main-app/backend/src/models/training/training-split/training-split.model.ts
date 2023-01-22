import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Schema } from 'mongoose';
import { CustomTrainingDto, CUSTOM_TRAINING_SCHEMA } from './custom-training.model';

export const TRAINING_SPLIT_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
    },
    trainings: {
        type: [CUSTOM_TRAINING_SCHEMA],
        required: true,
    },
});

export class TrainingSplitDto {
    @ApiProperty({
        type: String,
        description: 'Training split name',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: [CustomTrainingDto],
        description: 'Trainings in training split',
    })
    @ValidateNested({ each: true })
    @Type(() => CustomTrainingDto)
    @ArrayMinSize(1, { message: 'training.training_splits.at_least_one_training' })
    @IsArray()
    trainings: CustomTrainingDto[];
}
