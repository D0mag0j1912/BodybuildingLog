import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from '@nestjs/swagger';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { TrainingGuard } from '../../../guards/training/training.guard';
import { UserDto } from '../../../models/auth/login/login.model';
import { GeneralResponseDto } from '../../../models/common/response.model';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { RawNewTrainingDto } from '../../../models/training/new-training/raw-new-training.model';
import { DuplicateExercisePipe } from '../../../pipes/training/duplicate-exercise.pipe';
import { NewTrainingService } from '../../../services/training/new-training.service';

@ApiTags('Training')
@Controller('training/new-training')
@UseGuards(AuthGuard())
export class NewTrainingController {
    constructor(private _newTrainingService: NewTrainingService) {}

    @ApiCreatedResponse({
        status: 201,
        type: GeneralResponseDto,
        description: 'Returns message after successful creation',
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Returns server error',
    })
    @ApiForbiddenResponse({
        status: 403,
        description: 'Forbidden',
    })
    @Post()
    async addTraining(
        @Body(DuplicateExercisePipe)
        trainingData: RawNewTrainingDto,
    ): Promise<GeneralResponseDto> {
        return this._newTrainingService.addTraining(trainingData);
    }

    @Put(':id')
    @UseGuards(new TrainingGuard('training.new_training.errors.error_update_training'))
    async updateTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Body(DuplicateExercisePipe)
        updatedTrainingData: NewTrainingDto,
    ): Promise<GeneralResponseDto> {
        return this._newTrainingService.editTraining(trainingId, updatedTrainingData, user._id);
    }
}
