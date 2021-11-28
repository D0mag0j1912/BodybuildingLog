import { BadRequestException, Controller, Delete, Param, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings-response.model';
import { DeleteTrainingActionService } from 'src/services/training/training-actions/delete-training-action.service';
import { AuthenticationGuard } from '../../../guards/authentication.guard';

@Controller('delete_training')
@UseGuards(AuthenticationGuard)
export class DeleteTrainingActionController {

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ){}

    @Delete(':id')
    async deleteTraining(
        @Req() request: Request,
        @Param('id') trainingId: string,
        @Query('currentDate') currentDate: Date,
    ): Promise<PastTrainingsResponse> {
        if(!trainingId){
            throw new BadRequestException('training.past_trainings.actions.errors.error_delete_training');
        }
        return this.deleteTrainingActionService.deleteTraining(
            trainingId as string,
            request.headers.userId as string,
            currentDate as Date,
        );
    }
}