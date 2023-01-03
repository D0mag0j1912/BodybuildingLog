import { Controller, Delete, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { DeleteTrainingActionService } from '../../../services/training/training-actions/delete-training-action.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';
import { StreamData } from '../../../models/common/response.model';
import { DeleteTrainingMetaDto } from '../../../models/training/training-actions/delete-training-action.model';
import { ParseDeleteTrainingRequest } from '../../../pipes/training/parse-delete-training-request.pipe';

@ApiTags('Training')
@Controller('training/delete-training')
@UseGuards(AuthGuard())
export class DeleteTrainingActionController {
    constructor(private readonly deleteTrainingActionService: DeleteTrainingActionService) {}

    @Delete(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.actions.errors.error_delete_training'))
    async deleteTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Query(ParseDeleteTrainingRequest) meta: DeleteTrainingMetaDto,
    ): Promise<StreamData<PastTrainings>> {
        return this.deleteTrainingActionService.deleteTraining(trainingId, user._id, meta);
    }
}
