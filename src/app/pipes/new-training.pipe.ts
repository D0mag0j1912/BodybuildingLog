import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { Exercise } from '../models/training/exercise.model';
import { NewTraining } from '../models/training/new-training.model';
import { NewTrainingService } from '../services/training/new-training.service';

@Pipe({
    name: 'newTraining'
})
export class NewTrainingPipe implements PipeTransform {

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly route: ActivatedRoute
    ){}
    //Prima polje svih vježbi te vraća filtrirano polje
    transform(
        value: Observable<Exercise[]>,
        index: number,
        //Parametar koji mi služi samo da se Pipe ponovno izvede kada se dogodi akcija
        exerciseChanged: boolean)
        :Observable<Exercise[]> {
        return this.newTrainingService.currentTrainingChanged$.pipe(
            take(1),
            switchMap((data: NewTraining) => {
                value = of(data.exercise[index].availableExercises);
                return value;
            })
        );
        /* return this.route.params.pipe(
            switchMap((params: Params) => {
                if(!params['id']){
                    return this.newTrainingService.currentTrainingChanged$.pipe(
                        take(1),
                        switchMap((data: NewTraining) => {
                            value = of(data.exercise[index].availableExercises);
                            return value;
                        })
                    );
                }
                else {
                    return this.pastTrainingService.getPastTraining(params['id']).pipe(
                        switchMap((response: PastTrainingByIdResponse) => {
                            console.log(response.training.exercise);
                            console.log(index);
                            value = of(response.training.exercise[index].availableExercises);
                            return value;
                        })
                    );
                }
            })
        ); */
    }

}
