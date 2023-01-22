import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Schema } from 'mongoose';
import { DayOfWeek } from '../../../constants/enums/day-of-week.enum';
import { ExerciseDto, EXERCISE_SCHEMA } from '../exercise.model';

export const CUSTOM_TRAINING_SCHEMA = new Schema({
    dayOfWeek: {
        type: String,
        required: true,
    },
    exercises: {
        type: [EXERCISE_SCHEMA],
        required: true,
    },
});

export class CustomTrainingDto {
    @ApiProperty({
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        description: 'Enum describing particular day of week',
    })
    @IsNotEmpty()
    @IsString()
    dayOfWeek: DayOfWeek;

    @ApiProperty({
        type: [ExerciseDto],
        description: 'Selected exercise for training',
    })
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => ExerciseDto)
    @IsArray()
    exercises: ExerciseDto[];
}
