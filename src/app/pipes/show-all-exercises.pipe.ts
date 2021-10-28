import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NewTraining, SingleExercise } from "../models/training/new-training.model";

@Pipe({
    name: 'showAllExercises'
})
export class ShowAllExercisesPipe implements PipeTransform {

    constructor(
        private readonly translateService: TranslateService,
    ){}

    transform(training: NewTraining): string {
        //TODO: this.translateService.stream['key1', 'key2'...].pipe()
        let exercisesToConcat: string = '';
        training.exercise.forEach((x: SingleExercise, index: number) => {
            exercisesToConcat += `${index+1}. ${this.translateService.instant(x.exerciseName)}\n`;
        });
        return exercisesToConcat as string;
    }
}
