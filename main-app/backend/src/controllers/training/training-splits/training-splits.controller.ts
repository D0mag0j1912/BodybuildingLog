import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiCreatedResponse,
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiQuery,
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
    @ApiQuery({
        name: 'contains',
        type: String,
        description: 'search value',
        required: false,
    })
    @StreamModelResponse(TrainingSplitDto, true)
    @Get()
    async getTrainingSplits(
        @GET_USER() user: UserDto,
        @Query('contains') contains?: string,
    ): Promise<StreamModelDto<TrainingSplitDto[]>> {
        return this._trainingSplitsService.getTrainingSplits(user._id, contains);
    }

    /**
     * Get training split by ID
     */
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @ApiOkResponse({
        type: TrainingSplitDto,
        description: 'Returns training split',
    })
    @Get(':id')
    async getTrainingSplit(@Param('id') trainingSplitId: string): Promise<TrainingSplitDto> {
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
    async updateTrainingSplit(
        @GET_USER() user: UserDto,
        @Param('id') trainingSplitId: string,
        @Body() updatedTrainingSplit: TrainingSplitDto,
    ): Promise<TrainingSplitDto> {
        return this._trainingSplitsService.editTrainingSplit(
            trainingSplitId,
            updatedTrainingSplit,
            user._id,
        );
    }

    /**
     * Delete training split
     */
    @ApiOkResponse({
        status: 200,
        description: 'Training split deleted successfully',
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Returns server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @Delete(':id')
    async deleteTrainingSplit(
        @GET_USER() user: UserDto,
        @Param('id') trainingSplitId: string,
    ): Promise<void> {
        return this._trainingSplitsService.deleteTrainingSplit(trainingSplitId, user._id);
    }
}
