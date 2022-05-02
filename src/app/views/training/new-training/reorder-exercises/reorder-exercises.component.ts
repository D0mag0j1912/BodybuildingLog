import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemReorderEventDetail, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DialogRoles } from '../../../../models/common/types/modal-roles.type';
import { Training } from '../../../../models/training/new-training/training.model';
import { NewTrainingService } from '../../../../services/training/new-training.service';

@Component({
    templateUrl: './reorder-exercises.component.html',
    styleUrls: ['./reorder-exercises.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderExercisesComponent {

    private reorderedTrainingState: Training;

    readonly currentExercises$: Observable<string[]> = this.newTrainingService.currentTrainingChanged$
        .pipe(
            map((training: Training) => training.exercises.map(exercise => exercise.exerciseName)),
        );

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly modalController: ModalController,
    ) { }

    doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
        this.newTrainingService.currentTrainingChanged$
            .pipe(
                take(1),
            )
            .subscribe(state => {
                const exerciseFrom = state.exercises.find((_exercise, index) => index === ev.detail.from);
                const remainingExercises = state.exercises.filter((_exercise, index) => index !== ev.detail.from);
                const reorderedExercises = [
                    ...remainingExercises.slice(0, ev.detail.to),
                    exerciseFrom,
                    ...remainingExercises.slice(ev.detail.to),
                ];
                this.reorderedTrainingState = {
                    ...state,
                    exercises: reorderedExercises,
                };
                ev.detail.complete();
            });
    }

    async reorderExercises(): Promise<void> {
        await this.modalController.dismiss(this.reorderedTrainingState, DialogRoles.REORDER_EXERCISES);
    }

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(undefined, DialogRoles.CANCEL);
    }
}
