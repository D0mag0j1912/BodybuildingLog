import { BadRequestException, Controller, Delete, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { GeneralResponseData } from 'src/app.service';
import { DeleteTrainingActionService } from 'src/services/training/training-actions/delete-training-action.service';

@Controller('delete_training')
export class DeleteTrainingActionController {

    constructor(
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
    ){}

    @Delete(':id')
    async deleteTraining(
        @Param('id') trainingId: string,
        @Req() request: Request,
    ): Promise<GeneralResponseData> {
        if(!trainingId){
            throw new BadRequestException('training.past_trainings.actions.errors.error_delete_training');
        }
        return this.deleteTrainingActionService.deleteTraining(
            trainingId as string,
            request.headers.userId as string
        );
    }
}