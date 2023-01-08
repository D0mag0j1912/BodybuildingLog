import { BadRequestException, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
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
import { PeriodFilterType } from '../../../models/training/past-trainings/period-filter.type';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';

@ApiTags('Past trainings')
@Controller('training/past-trainings')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, PaginatorDto)
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
    @StreamModelResponse(PaginatorDto, false, true)
    @Get()
    async getPastTrainings(
        @GET_USER() user: UserDto,
        @Query('currentDate') currentDate: Date,
        @Query('filterType') filterType: PeriodFilterType,
    ): Promise<StreamModelDto<PaginatorDto<PastTrainingsDto>>> {
        //TODO: Create custom Pipe
        if (!currentDate || !filterType) {
            throw new BadRequestException(
                'training.past_trainings.errors.past_trainings_error_title',
            );
        }
        return this._pastTrainingsService.getPastTrainings(currentDate, filterType, user._id);
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
