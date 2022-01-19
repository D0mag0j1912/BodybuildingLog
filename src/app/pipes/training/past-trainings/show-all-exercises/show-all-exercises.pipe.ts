import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Training } from '../../../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';

@Pipe({
    name: 'showAllExercises',
})
export class ShowAllExercisesPipe implements PipeTransform {

    constructor(
        private readonly translateService: TranslateService,
    ) {}

    transform(training: Training): Observable<string> {
        return this.translateService.stream(training.exercise?.map((x: SingleExercise) => x?.exerciseName) ?? []).pipe(
            map((value: {[key: string]: string}) => {
                let exercisesToConcat: string = '';
                Object.values(value).forEach((exerciseName: string, index: number) => {
                    exercisesToConcat += `${index+1}. ${exerciseName}\n`;
                });
                return exercisesToConcat as string;
            }),
        );
    }
}
