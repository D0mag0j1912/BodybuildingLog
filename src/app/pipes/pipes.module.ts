import { NgModule } from '@angular/core';
import { NewTrainingPipe } from './training/new-training/new-training.pipe';
import { MapTrainingItemActionsPipe } from './training/past-trainings/map-training-actions.pipe';
import { ShowAllExercisesPipe } from './training/past-trainings/show-all-exercises.pipe';

@NgModule({
    declarations: [
        NewTrainingPipe,
        ShowAllExercisesPipe,
        MapTrainingItemActionsPipe,
    ],
    exports: [
        NewTrainingPipe,
        ShowAllExercisesPipe,
        MapTrainingItemActionsPipe,
    ]
})
export class PipesModule {}
