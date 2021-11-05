import { BadRequestException, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { NewTraining } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings-response.model';
import { PastTrainingsService } from 'src/services/training/past-trainings.service';
@Controller('past_trainings')
export class PastTrainingsController {

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
    ){}

    @Get()
    async getPastTrainings(
        @Req() request: Request,
        @Query('currentDate') currentDate: Date
    ): Promise<PastTrainingsResponse> {
        if(!currentDate){
            throw new BadRequestException('training.past_trainings.errors.past_trainings_error_title');
        }
        return this.pastTrainingsService.getPastTrainings(
            currentDate as Date,
            request.headers.userId as string
        );
    }

    @Get(':id')
    async getPastTraining(
        @Param('id') trainingId: string
    ): Promise<NewTraining> {
        if(!trainingId){
            throw new BadRequestException('training.past_trainings.errors.get_training_error');
        }
        return this.pastTrainingsService.getPastTraining(trainingId as string);
    }
}