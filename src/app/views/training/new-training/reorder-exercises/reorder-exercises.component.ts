import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemReorderEventDetail, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogRoles } from '../../../../models/common/types/modal-roles.type';
import { Training } from '../../../../models/training/new-training/training.model';
import { NewTrainingStateService } from '../../../../services/state/new-training-state.service';

@Component({
    templateUrl: './reorder-exercises.component.html',
    styleUrls: ['./reorder-exercises.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderExercisesComponent {

    private reorderedTrainingState: Training;

    readonly currentExercises$: Observable<string[]> = this.newTrainingStateService.currentTrainingChanged$
        .pipe(
            map((training: Training) => training.exercises.map(exercise => exercise.exerciseName)),
        );

    constructor(
        private readonly newTrainingStateService: NewTrainingStateService,
        private readonly modalController: ModalController,
    ) { }

    doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
        const currentTrainingState = this.newTrainingStateService.getCurrentTrainingState();
        const exerciseFrom = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.find((_exercise, index) => index === ev.detail.from);
        const remainingExercises = (this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState).exercises.filter((_exercise, index) => index !== ev.detail.from);
        const reorderedExercises = [
            ...remainingExercises.slice(0, ev.detail.to),
            exerciseFrom,
            ...remainingExercises.slice(ev.detail.to),
        ];
        this.reorderedTrainingState = {
            ...(this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState),
            exercises: reorderedExercises,
        };
        ev.detail.complete();
    }

    async reorderExercises(): Promise<void> {
        await this.modalController.dismiss(this.reorderedTrainingState, DialogRoles.REORDER_EXERCISES);
    }

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(undefined, DialogRoles.CANCEL);
    }
}
