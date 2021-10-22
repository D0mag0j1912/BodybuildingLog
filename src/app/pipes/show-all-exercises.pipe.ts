import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NewTraining } from "../models/training/new-training.model";

@Pipe({
    name: 'showAllExercises'
})
export class ShowAllExercisesPipe implements PipeTransform {

    constructor(
        private readonly translateService: TranslateService
    ){}

    transform(training: NewTraining): string {
        let exercisesToConcat: string = '';
        for(const exercises of training.exercise){
            exercisesToConcat += `${this.translateService.instant(exercises.exerciseName)}\n`;
        }
        return exercisesToConcat;
    }
}
