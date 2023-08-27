import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';
import { PaginatorDto } from '../../../models/common/paginator.model';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';
import { PastTrainingsPayload } from '../../../models/training/past-trainings/past-trainings-payload.model';
import { PaginatorResponse } from '../../../decorators/paginator-response.decorator';
import { SearchDataDto } from '../../../models/common/search-data.model';

@ApiTags('Past trainings')
@Controller('api/training/past-trainings')
@UseGuards(AuthGuard())
@ApiExtraModels(PaginatorDto, PastTrainingsDto, PastTrainingsPayload, SearchDataDto)
export class PastTrainingsController {
    constructor(private _pastTrainingsService: PastTrainingsService) {}

    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @PaginatorResponse()
    @Get()
    async getPastTrainings(
        @GET_USER() user: UserDto,
        @Query('payload') payload: PastTrainingsPayload,
    ): Promise<PaginatorDto<PastTrainingsDto>> {
        return this._pastTrainingsService.getPastTrainings(payload, user._id);
    }

    @StreamModelResponse(NewTrainingDto)
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Get(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.errors.get_training_error'))
    async getPastTraining(
        @Param('id') trainingId: string,
    ): Promise<StreamModelDto<NewTrainingDto>> {
        return this._pastTrainingsService.getPastTraining(trainingId);
    }
}
