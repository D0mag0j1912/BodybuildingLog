import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Exercise } from '../../../models/training/exercise.model';
import { NewTrainingService } from '../../../services/training/new-training.service';

@ApiTags('Training')
@Controller('training/get_exercises')
@UseGuards(AuthGuard())
export class ExerciseController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) { }

    @ApiCreatedResponse({ type: Exercise })
    @Get()
    async getExercise(@Param('exerciseName') exerciseName: string): Promise<Exercise> {
        return this.newTrainingService.getExerciseByName(exerciseName);
    }
    
}