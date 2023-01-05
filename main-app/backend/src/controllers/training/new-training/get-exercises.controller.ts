import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiTags,
    getSchemaPath,
} from '@nestjs/swagger';
import { ExerciseDto } from '../../../models/training/exercise.model';
import { NewTrainingService } from '../../../services/training/new-training.service';
import { StreamModelDto } from '../../../models/common/stream.model';

@ApiTags('Training')
@Controller('training/get-exercises')
@UseGuards(AuthGuard())
@ApiExtraModels(ExerciseDto)
export class GetExercisesController {
    constructor(private _newTrainingService: NewTrainingService) {}

    @ApiOkResponse({
        status: 200,
        description: 'Returns exercises to the client',
        schema: {
            allOf: [
                { $ref: getSchemaPath(StreamModelDto) },
                {
                    properties: {
                        IsLoading: {
                            type: 'boolean',
                            items: { $ref: getSchemaPath(ExerciseDto) },
                        },
                        IsError: {
                            type: 'boolean',
                            items: { $ref: getSchemaPath(ExerciseDto) },
                        },
                        Value: {
                            type: 'array',
                            items: { $ref: getSchemaPath(ExerciseDto) },
                        },
                    },
                },
            ],
        },
    })
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
