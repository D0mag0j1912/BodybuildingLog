import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiInternalServerErrorResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { DeleteTrainingActionService } from '../../../services/training/training-actions/delete-training-action.service';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';

@ApiTags('Past trainings')
@Controller('api/training/delete-training')
@UseGuards(AuthGuard())
export class DeleteTrainingActionController {
    constructor(private _deleteTrainingActionService: DeleteTrainingActionService) {}

    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Delete(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.errors.error_delete_training'))
    async deleteTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
    ): Promise<void> {
        return this._deleteTrainingActionService.deleteTraining(trainingId, user._id);
    }
}
