import { Pipe, PipeTransform } from "@angular/core";
import { MatSelect } from "@angular/material/select";

const MAX_EXERCISE_NAME_WIDTH: number = 165;

@Pipe({
    name: 'showFullExerciseName'
})
export class ShowFullExerciseNamePipe implements PipeTransform {

    transform(
        fullExerciseName: string,
        selectElement: MatSelect
    ): string {
        console.log(selectElement._elementRef.nativeElement)
        const exerciseNameElement: HTMLSpanElement = ((selectElement._elementRef.nativeElement as HTMLElement).querySelector('.mat-select-value') as HTMLSpanElement);
        console.log(exerciseNameElement);
        return '';
    }

}
