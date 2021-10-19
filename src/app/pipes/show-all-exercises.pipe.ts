import { Pipe, PipeTransform } from "@angular/core";
import { NewTraining } from "../models/training/new-training.model";

@Pipe({
    name: 'showAllExercises'
})
export class ShowAllExercisesPipe implements PipeTransform {

    transform(training: NewTraining): string {
        let exercisesToConcat: string = '';
        for(const exercises of training.exercise){
            exercisesToConcat += `${exercises.exerciseName}\n`;
        }
        return exercisesToConcat;
    }
}
