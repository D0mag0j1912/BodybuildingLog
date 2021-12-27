import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { Exercise } from '../../../models/training/exercise.model';
import { Training } from '../../../models/training/new-training/new-training.model';
import { NewTrainingService } from '../../../services/training/new-training.service';

@Pipe({
    name: 'newTraining',
})
export class NewTrainingPipe implements PipeTransform {

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly route: ActivatedRoute,
    ) {}

    transform(
        value: Observable<Exercise[]>,
        index: number,
        exerciseChanged: boolean,
    ): Observable<Exercise[]> {
        return this.route.params.pipe(
            switchMap((params: Params) => {
                if (!params['id']) {
                    return this.newTrainingService.currentTrainingChanged$.pipe(
                        take(1),
                        switchMap((data: Training) => {
                            value = of(data.exercise[index].availableExercises);
                            return value;
                        }),
                    );
                }
                else {
                    return this.pastTrainingService.getPastTraining(params['id']).pipe(
                        switchMap((response: Training) => {
                            value = of(response.exercise[index]?.availableExercises);
                            return value;
                        }),
                    );
                }
            }),
        );
    }

}
