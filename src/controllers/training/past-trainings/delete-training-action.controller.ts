import { Controller, Delete, Param, Query, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings.model';
import { DeleteTrainingActionService } from 'src/services/training/training-actions/delete-training-action.service';
import { AuthenticationGuard } from '../../../guards/auth/authentication.guard';
import { TrainingGuard } from '../../../guards/training/training.guard';

@ApiTags('Training')
@Controller('training/delete_training')
@UseGuards(AuthenticationGuard)
export class DeleteTrainingActionController {

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ) {}

    @Delete(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.actions.errors.error_delete_training'))
    async deleteTraining(
        @Req() request: Request,
        @Param('id') trainingId: string,
        @Query('currentDate') currentDate: Date,
    ): Promise<PastTrainingsResponse> {
        return this.deleteTrainingActionService.deleteTraining(
            trainingId as string,
            request.headers.userId as string,
            currentDate as Date,
        );
    }
}