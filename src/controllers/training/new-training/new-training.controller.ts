import {
    Body,
    Controller,
    Param,
    Post,
    Put,
    Req,
    UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { AuthenticationGuard } from '../../../guards/authentication.guard';
import { TrainingGuard } from '../../../guards/training.guard';
import { GeneralResponseData } from '../../../models/common/response.model';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';

@Controller('handle_training')
@UseGuards(AuthenticationGuard)
export class NewTrainingController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ){}

    @Post()
    async addTraining( @Body('trainingData') trainingData: NewTraining ): Promise<GeneralResponseData> {
        return this.newTrainingService.addTraining(trainingData as NewTraining);
    }

    @Put(':id')
    @UseGuards(new TrainingGuard('training.new_training.errors.error_update_training'))
    async updateTraining(
        @Req() request: Request,
        @Param('id') trainingId: string,
        @Body('updatedTrainingData') updatedTrainingData: NewTraining,
    ): Promise<GeneralResponseData> {
        return this.newTrainingService.editTraining(
            trainingId as string,
            updatedTrainingData as NewTraining,
            request.headers.userId as string,
        );
    }
}