import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ExerciseDto } from '../../../models/training/exercise.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';

@ApiTags('Training')
@Controller('training/get-exercises')
@UseGuards(AuthGuard())
@ApiExtraModels(ExerciseDto)
export class GetExercisesController {
    constructor(private _newTrainingService: NewTrainingService) {}

    @StreamModelResponse(ExerciseDto)
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Server fails to return exercises',
    })
    @ApiForbiddenResponse({
        status: 403,
        description: 'Forbidden',
    })
    @Get()
    async getExercises(): Promise<StreamModelDto<ExerciseDto[]>> {
        return this._newTrainingService.getExercises();
    }
}
