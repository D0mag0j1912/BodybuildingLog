import { NgModule } from '@angular/core';
import { FilterAvailableExercisesPipe } from './training/new-training/filter-available-exercises.pipe';
import { MapTrainingItemActionsPipe } from './training/past-trainings/map-training-actions.pipe';

@NgModule({
    declarations: [FilterAvailableExercisesPipe, MapTrainingItemActionsPipe],
    exports: [FilterAvailableExercisesPipe, MapTrainingItemActionsPipe],
})
export class PipesModule {}
