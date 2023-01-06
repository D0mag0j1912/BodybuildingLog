import { BadRequestException, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';
import { Paginator } from '../../../models/common/paginator.model';
import { PeriodFilterType } from '../../../models/training/past-trainings/period-filter.type';
import { StreamModelDto } from '../../../models/common/stream.model';

@ApiTags('Training')
@Controller('training/past-trainings')
@UseGuards(AuthGuard())
export class PastTrainingsController {
    constructor(private readonly pastTrainingsService: PastTrainingsService) {}

    @Get()
    async getPastTrainings(
        @GET_USER() user: UserDto,
        @Query('currentDate') currentDate: Date,
        @Query('filterType') filterType: PeriodFilterType,
    ): Promise<StreamModelDto<Paginator<PastTrainingsDto>>> {
        //TODO: Create custom Pipe
        if (!currentDate || !filterType) {
            throw new BadRequestException(
                'training.past_trainings.errors.past_trainings_error_title',
            );
        }
        return this.pastTrainingsService.getPastTrainings(currentDate, filterType, user._id);
    }

    @ApiCreatedResponse({ type: NewTrainingDto })
    @Get(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.errors.get_training_error'))
    async getPastTraining(
        @Param('id') trainingId: string,
    ): Promise<StreamModelDto<NewTrainingDto>> {
        return this.pastTrainingsService.getPastTraining(trainingId as string);
    }
}
