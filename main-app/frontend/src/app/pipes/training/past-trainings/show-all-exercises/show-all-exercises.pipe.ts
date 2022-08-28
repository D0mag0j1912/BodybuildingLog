import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';

@Pipe({ name: 'showAllExercises' })
export class ShowAllExercisesPipe implements PipeTransform {
    constructor(private readonly translateService: TranslateService) {}

    transform(training: NewTraining): Observable<string> {
        return this.translateService
            .stream(training.exercises?.map((x: SingleExercise) => x?.exerciseData.name) ?? [])
            .pipe(
                map((value: { [key: string]: string }) => {
                    let exercisesToConcat = '';
                    Object.values(value).forEach((exerciseName: string, index: number) => {
                        exercisesToConcat += `${index + 1}. ${exerciseName}\n`;
                    });
                    return exercisesToConcat as string;
                }),
            );
    }
}
