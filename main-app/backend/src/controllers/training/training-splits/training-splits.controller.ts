import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiCreatedResponse,
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { UserDto } from '../../../models/auth/login/login.model';
import { StreamModelDto } from '../../../models/common/stream.model';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';
import { TrainingSplitsService } from '../../../services/training/training-splits.service';
import { TrainingSplitDto } from '../../../models/training/training-split/training-split.model';
import { GeneralResponseDto } from '../../../models/common/response.model';

@ApiTags('Training splits')
@Controller('api/training/training-splits')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, TrainingSplitDto)
export class TrainingSplitsController {
    constructor(private _trainingSplitsService: TrainingSplitsService) {}

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
        type: GeneralResponseDto,
        description: 'Training split created',
    })
    @Post()
    async createTrainingSplit(
        @Body() trainingSplit: TrainingSplitDto,
        @GET_USER() user: UserDto,
    ): Promise<GeneralResponseDto> {
        return this._trainingSplitsService.createTrainingSplit(trainingSplit, user._id);
    }
}