import { Controller, Delete, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { PastTrainings } from 'src/models/training/past-trainings/past-trainings.model';
import { DeleteTrainingActionService } from 'src/services/training/training-actions/delete-training-action.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login.model';
import { StreamData } from '../../../models/common/response.model';

@ApiTags('Training')
@Controller('training/delete_training')
@UseGuards(AuthGuard())
export class DeleteTrainingActionController {

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ) {}

    @Delete(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.actions.errors.error_delete_training'))
    async deleteTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Query('currentDate') currentDate: Date,
    ): Promise<StreamData<PastTrainings>> {
        return this.deleteTrainingActionService.deleteTraining(
            trainingId as string,
            user._id as string,
            currentDate as Date,
        );
    }
}