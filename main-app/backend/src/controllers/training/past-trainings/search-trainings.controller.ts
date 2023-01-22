import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiExtraModels,
    ApiInternalServerErrorResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GET_USER } from '../../../decorators/get-user.decorator';
import { StreamModelResponse } from '../../../decorators/stream-model-response.decorator';
import { UserDto } from '../../../models/auth/login/login.model';
import { PaginatorDto } from '../../../models/common/paginator.model';
import { SearchDataDto } from '../../../models/common/search-data.model';
import { StreamModelDto } from '../../../models/common/stream.model';
import { PastTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { PaginatePipe } from '../../../pipes/common/paginate.pipe';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@ApiTags('Past trainings')
@UseGuards(AuthGuard())
@Controller('api/training/search-trainings')
@ApiExtraModels(StreamModelDto, PaginatorDto)
export class SearchTrainingsController {
    constructor(private _pastTrainingsService: PastTrainingsService) {}

    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
    })
    @StreamModelResponse(PaginatorDto, false, true)
    @Get()
    async searchTrainings(
        @GET_USER() user: UserDto,
        @Query(PaginatePipe) query: SearchDataDto,
    ): Promise<StreamModelDto<PaginatorDto<PastTrainingsDto>>> {
        return this._pastTrainingsService.searchTrainings(user._id, query);
    }
}
