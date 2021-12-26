import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../guards/auth/authentication.guard';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { SearchTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { PastTrainingsService } from '../../../services/training/past-trainings.service';

@ApiTags('Training')
@UseGuards(AuthenticationGuard)
@Controller('training/search_trainings')
export class SearchTrainingsController {

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
    ) {}

    @Get(':id')
    async searchTrainings(@Query('searchValue') searchValue: SearchTrainingsDto): Promise<NewTrainingDto[]> {
        return this.pastTrainingsService.searchTrainings(searchValue);
    }
}