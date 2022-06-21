import { BadRequestException, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Training } from 'src/models/training/new-training/training.model';
import { PastTrainings } from 'src/models/training/past-trainings/past-trainings.model';
import { PastTrainingsService } from 'src/services/training/past-trainings.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login.model';
import { Paginator } from '../../../models/common/paginator.model';
import { StreamData } from '../../../models/common/response.model';
import { PeriodFilterType } from '../../../models/training/past-trainings/past-trainings.model';

@ApiTags('Training')
@Controller('training/past_trainings')
@UseGuards(AuthGuard())
export class PastTrainingsController {

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
    ) { }

    @Get()
    async getPastTrainings(
        @GET_USER() user: UserDto,
        @Query('currentDate') currentDate: Date,
        @Query('filterType') filterType: PeriodFilterType,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        //TODO: Create custom Pipe
        if (!currentDate || !filterType) {
            throw new BadRequestException('training.past_trainings.errors.past_trainings_error_title');
        }
        return this.pastTrainingsService.getPastTrainings(
            currentDate,
            filterType,
            user._id,
        );
    }

    @ApiCreatedResponse({ type: Training })
    @Get(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.errors.get_training_error'))
    async getPastTraining(@Param('id') trainingId: string): Promise<StreamData<Training>> {
        return this.pastTrainingsService.getPastTraining(trainingId as string);
    }
}