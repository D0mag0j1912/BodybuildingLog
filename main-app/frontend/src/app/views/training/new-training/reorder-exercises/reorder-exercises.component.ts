import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemReorderEventDetail, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { Training } from '../../../../models/training/new-training/training.model';
import { TrainingStoreService } from '../../../../services/store/training/training-store.service';

@Component({
    templateUrl: './reorder-exercises.component.html',
    styleUrls: ['./reorder-exercises.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderExercisesComponent {

    private reorderedTrainingState: Training;

    readonly currentExercises$: Observable<string[]> = this.trainingStoreService.currentTrainingChanged$
        .pipe(
            map((training: Training) => training.exercises.map(exercise => exercise.exerciseData.name)),
        );

    constructor(
        private readonly trainingStoreService: TrainingStoreService,
        private readonly modalController: ModalController,
    ) { }

    doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
        const currentTrainingState = this.trainingStoreService.getCurrentTrainingState();
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
