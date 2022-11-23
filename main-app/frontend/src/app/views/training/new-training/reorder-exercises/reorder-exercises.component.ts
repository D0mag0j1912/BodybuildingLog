import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemReorderEventDetail, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';

@Component({
    templateUrl: './reorder-exercises.component.html',
    styleUrls: ['./reorder-exercises.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderExercisesComponent {
    private reorderedTrainingState: NewTraining;

    readonly currentExercises$: Observable<string[]> =
        this._newTrainingStoreService.trainingState$.pipe(
            map((training: NewTraining) =>
                training.exercises.map((exercise) => exercise.exerciseData.name),
            ),
        );

    constructor(
        private _newTrainingStoreService: NewTrainingStoreService,
        private _modalController: ModalController,
    ) {}

    doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
        const currentTrainingState = this._newTrainingStoreService.getCurrentTrainingState();
        const exerciseFrom = (
            this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState
        ).exercises.find((_exercise, index) => index === ev.detail.from);
        const remainingExercises = (
            this.reorderedTrainingState ? this.reorderedTrainingState : currentTrainingState
        ).exercises.filter((_exercise, index) => index !== ev.detail.from);
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
        await this._modalController.dismiss(
            this.reorderedTrainingState,
            DialogRoles.REORDER_EXERCISES,
        );
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(undefined, DialogRoles.CANCEL);
    }
}
