import { NgModule } from '@angular/core';
import { NewTrainingPipe } from './training/new-training/new-training.pipe';
import { MapTrainingItemActionsPipe } from './training/past-trainings/map-training-actions.pipe';

@NgModule({
    declarations: [
        NewTrainingPipe,
        MapTrainingItemActionsPipe,
    ],
    exports: [
        NewTrainingPipe,
        MapTrainingItemActionsPipe,
    ],
})
export class PipesModule {}
