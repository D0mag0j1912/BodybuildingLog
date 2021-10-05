import { Controller, Get } from "@nestjs/common";
import { Exercise } from "src/models/training/exercise.model";
import { NewTrainingService } from "src/services/training/new-training.service";

@Controller('getExercises')
export class GetExercisesController {

    constructor(
        private readonly newTrainingService: NewTrainingService
    ){}

    @Get()
    getExercises(): Promise<Exercise[]> {
        return this.newTrainingService.getExercises();
    }
}