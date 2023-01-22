import { Body, Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { PastTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { DeleteTrainingActionService } from '../../../services/training/training-actions/delete-training-action.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';
import { DeleteTrainingActionRequestDto } from '../../../models/training/training-actions/delete-training-action-request.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';
import { StreamModelDto } from '../../../models/common/stream.model';

@ApiTags('Past trainings')
@Controller('api/training/delete-training')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, PastTrainingsDto)
export class DeleteTrainingActionController {
    constructor(private _deleteTrainingActionService: DeleteTrainingActionService) {}

    @StreamModelResponse(PastTrainingsDto)
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Delete(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.actions.errors.error_delete_training'))
    async deleteTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Body() meta: DeleteTrainingActionRequestDto,
    ): Promise<StreamModelDto<PastTrainingsDto>> {
        return this._deleteTrainingActionService.deleteTraining(
            trainingId,
            user._id,
            meta.deleteTrainingMeta,
        );
    }
}
