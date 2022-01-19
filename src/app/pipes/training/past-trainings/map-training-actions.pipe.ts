import { Pipe, PipeTransform } from '@angular/core';
import { TrainingItemActions } from '../../../models/training/past-trainings/training-actions/training-actions.model';

interface TrainingItemActionsProperties {
    icon: string;
    tooltip: string;
}

@Pipe({
    name: 'mapTrainingItemActions',
})

export class MapTrainingItemActionsPipe implements PipeTransform {

    private readonly actionToIcon: { [key: string]: TrainingItemActionsProperties } = {
        'delete': {
            icon: 'delete',
            tooltip: 'training.past_trainings.buttons.delete_training',
        },
        'more': {
            icon: 'more_vert',
            tooltip: 'TODO',
        },
    };

    transform(
        action: TrainingItemActions,
        purpose: string,
    ): string {
        if (purpose === 'icon') {
            return this.actionToIcon[action].icon as string;
        }
        else {
            return this.actionToIcon[action].tooltip as string;
        }
    }

}
