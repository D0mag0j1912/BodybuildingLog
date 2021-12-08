import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Exercise } from 'src/models/training/exercise.model';
import { NewTrainingService } from 'src/services/training/new-training.service';
import { AuthenticationGuard } from '../../../guards/authentication.guard';

@ApiTags('Training')
@Controller('training/get_exercises')
@UseGuards(AuthenticationGuard)
export class GetExercisesController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) {}

    @Get()
    async getExercises(): Promise<Exercise[]> {
        return this.newTrainingService.getExercises();
    }
}