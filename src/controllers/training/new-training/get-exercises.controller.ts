import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Exercise } from 'src/models/training/exercise.model';
import { NewTrainingService } from 'src/services/training/new-training.service';
import { AuthenticationGuard } from '../../../guards/auth/authentication.guard';

@ApiTags('Training')
@Controller('training/get_exercises')
@UseGuards(AuthenticationGuard)
export class GetExercisesController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) {}

    @ApiCreatedResponse({ type: Exercise })
    @Get()
    async getExercises(): Promise<Exercise[]> {
        return this.newTrainingService.getExercises();
    }
}