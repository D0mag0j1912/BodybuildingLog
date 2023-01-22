import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
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

@ApiTags('Training splits')
@Controller('api/training/training-splits')
@UseGuards(AuthGuard())
@ApiExtraModels(StreamModelDto, TrainingSplitDto)
export class GetTrainingSplitsController {
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
}
