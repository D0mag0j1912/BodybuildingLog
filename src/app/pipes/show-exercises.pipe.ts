import { Pipe, PipeTransform } from "@angular/core";
import { NewTraining } from "../models/training/new-training.model";

@Pipe({
    name: 'showExercises'
})
export class ShowExercisesPipe implements PipeTransform {

    transform(training: NewTraining): string {
        let exercisesToConcat: string = '';
        for(const exercises of training.exercise){
            exercisesToConcat += `${exercises.currentExercise.name}\n`;
        }
        return exercisesToConcat;
    }
}
