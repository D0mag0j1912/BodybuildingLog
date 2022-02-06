import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GET_USER } from 'src/decorators/get-user.decorator';
import { UserDto } from '../../../models/auth/login.model';
import { PaginateDto, Paginator } from '../../../models/common/paginator.model';
import { StreamData } from '../../../models/common/response.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { PaginatePipe } from '../../../pipes/common/paginate.pipe';
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
        @Query(PaginatePipe) query: PaginateDto,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        return this.pastTrainingsService.searchTrainings(
            user._id as string,
            query?.searchValue,
            query.size,
            query.page,
        );
    }
}