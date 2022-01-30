import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GET_USER } from 'src/decorators/get-user.decorator';
import { UserDto } from '../../../models/auth/login.model';
import { TrainingData } from '../../../models/common/response.model';
import { PastTrainingsResponse } from '../../../models/training/past-trainings/past-trainings.model';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@ApiTags('Training')
@UseGuards(AuthGuard())
@Controller('training/search_trainings')
export class SearchTrainingsController {

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
    ) {}

    @Get()
    async searchTrainings(
        @GET_USER() user: UserDto,
        @Query('searchValue') searchValue: string,
        @Query('pageSize', ParseIntPipe) pageSize: number,
        @Query('currentPage', ParseIntPipe) currentPage: number,
    ): Promise<TrainingData<PastTrainingsResponse>> {
        return this.pastTrainingsService.searchTrainings(
            user._id as string,
            searchValue,
            pageSize,
            currentPage,
        );
    }
}