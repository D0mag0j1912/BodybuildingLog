import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ExerciseDto } from '../../../models/training/exercise.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';

@ApiTags('Training')
@Controller('training/get-exercises')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, ExerciseDto)
export class GetExercisesController {
    constructor(private _newTrainingService: NewTrainingService) {}

    @StreamModelResponse(ExerciseDto, true)
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Server fails to return exercises',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Get()
    async getExercises(): Promise<StreamModelDto<ExerciseDto[]>> {
        return this._newTrainingService.getExercises();
    }
}
