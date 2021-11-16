import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleExerciseComponent {}
