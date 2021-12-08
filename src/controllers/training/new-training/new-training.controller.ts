import {
    Body,
    Controller,
    Param,
    Post,
    Put,
    Req,
    UseGuards} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthenticationGuard } from '../../../guards/authentication.guard';
import { TrainingGuard } from '../../../guards/training.guard';
import { GeneralResponseData } from '../../../models/common/response.model';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';

@ApiTags('Training')
@Controller('training/handle_training')
@UseGuards(AuthenticationGuard)
export class NewTrainingController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) {}

    @Post()
    async addTraining(@Body('trainingData') trainingData: NewTrainingDto): Promise<GeneralResponseData> {
        return this.newTrainingService.addTraining(trainingData as NewTrainingDto);
    }

    @Put(':id')
    @UseGuards(new TrainingGuard('training.new_training.errors.error_update_training'))
    async updateTraining(
        @Req() request: Request,
        @Param('id') trainingId: string,
        @Body('updatedTrainingData') updatedTrainingData: NewTrainingDto,
    ): Promise<GeneralResponseData> {
        return this.newTrainingService.editTraining(
            trainingId as string,
            updatedTrainingData as NewTrainingDto,
            request.headers.userId as string,
        );
    }
}