import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiCreatedResponse,
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { UserDto } from '../../../models/auth/login/login.model';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';
import { TrainingSplitsService } from '../../../services/training/training-splits.service';
import { TrainingSplitDto } from '../../../models/training/training-split/training-split.model';
@ApiTags('Training splits')
@Controller('api/training/training-splits')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, TrainingSplitDto)
export class TrainingSplitsController {
    constructor(private _trainingSplitsService: TrainingSplitsService) {}

    /**
     * Get training splits
     */
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @StreamModelResponse(TrainingSplitDto, true)
    @Get()
    async getTrainingSplits(
        @GET_USER() user: UserDto,
    ): Promise<StreamModelDto<TrainingSplitDto[]>> {
        return this._trainingSplitsService.getTrainingSplits(user._id);
    }

    /**
     * Get training split
     */
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @StreamModelResponse(TrainingSplitDto)
    @Get(':id')
    async getTrainingSplit(
        @Param('id') trainingSplitId: string,
    ): Promise<StreamModelDto<TrainingSplitDto>> {
        return this._trainingSplitsService.getTrainingSplit(trainingSplitId);
    }

    /**
     * Create training split
     */

    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @ApiCreatedResponse({
        status: 201,
        type: TrainingSplitDto,
        description: 'Training split created',
    })
    @Post()
    async createTrainingSplit(
        @Body() trainingSplit: TrainingSplitDto,
        @GET_USER() user: UserDto,
    ): Promise<TrainingSplitDto> {
        return this._trainingSplitsService.createTrainingSplit(trainingSplit, user._id);
    }

    /**
     * Edit training split
     */
    @ApiOkResponse({
        status: 200,
        type: TrainingSplitDto,
        description: 'Returns updated data',
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Returns server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Put(':id')
    async updateTraining(
        @GET_USER() user: UserDto,
        @Param('id') trainingId: string,
        @Body() updatedTrainingSplit: TrainingSplitDto,
    ): Promise<TrainingSplitDto> {
        return this._trainingSplitsService.editTrainingSplit(
            trainingId,
            updatedTrainingSplit,
            user._id,
        );
    }
}
