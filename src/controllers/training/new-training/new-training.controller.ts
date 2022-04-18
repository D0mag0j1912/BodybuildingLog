import {
    Body,
    Controller,
    Param,
    Post,
    Put,
    UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login.model';
import { GeneralResponseData } from '../../../models/common/response.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { DuplicateExercisePipe } from '../../../pipes/training/duplicate-exercise.pipe';
import { EmptySetPipe } from '../../../pipes/training/empty-set.pipe';
import { EmptyTrainingPipe } from '../../../pipes/training/empty-training.pipe';
import { NewTrainingService } from '../../../services/training/new-training.service';

@ApiTags('Training')
@Controller('training/handle_training')
@UseGuards(AuthGuard())
export class NewTrainingController {

    constructor(
        private readonly newTrainingService: NewTrainingService,
    ) { }

    @Post()
    async addTraining(@Body('trainingData', EmptyTrainingPipe, DuplicateExercisePipe, EmptySetPipe) trainingData: Training): Promise<GeneralResponseData> {
        return this.newTrainingService.addTraining(trainingData);
    }

    @Put(':id')
    @UseGuards(new TrainingGuard('training.new_training.errors.error_update_training'))
    async updateTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Body('updatedTrainingData', EmptyTrainingPipe, DuplicateExercisePipe, EmptySetPipe) updatedTrainingData: Training,
    ): Promise<GeneralResponseData> {
        return this.newTrainingService.editTraining(
            trainingId as string,
            updatedTrainingData as Training,
            user._id as string,
        );
    }
}