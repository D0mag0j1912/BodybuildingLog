import { BadRequestException, Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { NewTrainingDto } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings-response.model';
import { PastTrainingsService } from 'src/services/training/past-trainings.service';
import { AuthenticationGuard } from '../../../guards/auth/authentication.guard';
import { TrainingGuard } from '../../../guards/training/training.guard';
@ApiTags('Training')
@Controller('training/past_trainings')
@UseGuards(AuthenticationGuard)
export class PastTrainingsController {

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
    ){}

    @Get()
    async getPastTrainings(
        @Req() request: Request,
        @Query('currentDate') currentDate: Date,
    ): Promise<PastTrainingsResponse> {
        if(!currentDate){
            throw new BadRequestException('training.past_trainings.errors.past_trainings_error_title');
        }
        return this.pastTrainingsService.getPastTrainings(
            currentDate as Date,
            request.headers.userId as string,
        );
    }

    @ApiCreatedResponse({ type: NewTrainingDto })
    @Get(':id')
    @UseGuards(new TrainingGuard('training.past_trainings.errors.get_training_error'))
    async getPastTraining(@Param('id') trainingId: string): Promise<NewTrainingDto> {
        return this.pastTrainingsService.getPastTraining(trainingId as string);
    }
}