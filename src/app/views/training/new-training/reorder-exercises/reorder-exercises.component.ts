import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogRoles } from '../../../../models/common/types/modal-roles.type';
import { Training } from '../../../../models/training/new-training/training.model';
import { NewTrainingService } from '../../../../services/training/new-training.service';

@Component({
    templateUrl: './reorder-exercises.component.html',
    styleUrls: ['./reorder-exercises.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderExercisesComponent {

    readonly currentExercises$: Observable<string[]> = this.newTrainingService.currentTrainingChanged$
        .pipe(
            map((training: Training) => training.exercise.map(exercise => exercise.exerciseName)),
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly modalController: ModalController,
    ) { }

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
