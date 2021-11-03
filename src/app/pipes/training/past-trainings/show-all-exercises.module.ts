import { NgModule } from '@angular/core';
import { ShowAllExercisesPipe } from './show-all-exercises.pipe';

@NgModule({
    declarations: [ShowAllExercisesPipe],
    exports: [ShowAllExercisesPipe],
})
export class ShowAllExercisesModule {}
