import { 
    BadRequestException, 
    Body, 
    Controller, 
    Param, 
    Post, 
    Put, 
    Req } from "@nestjs/common";
import { GeneralResponseData } from "src/app.service";
import { NewTraining } from "src/models/training/new-training/new-training.model";
import { NewTrainingService } from "src/services/training/new-training.service";

@Controller('handleTraining')
export class NewTrainingController {

    constructor(
        private readonly newTrainingService: NewTrainingService
    ){}

    @Post()
    addTraining(
        @Body('trainingData') trainingData: NewTraining
    ): Promise<GeneralResponseData> {
        return this.newTrainingService.addTraining(trainingData);
    }

    @Put(':trainingId')
    updateTraining(
        @Req() request,
        @Param('trainingId') trainingId: string,
        @Body('updatedTrainingData') updatedTrainingData: NewTraining
    ): Promise<GeneralResponseData> {
        if(!trainingId){
            throw new BadRequestException('training.new_training.errors.error_update_training')
        }
        return this.newTrainingService.editTraining(
            trainingId,
            updatedTrainingData,
            request.headers.userId as string
        );
    }
}