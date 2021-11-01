import { Pipe, PipeTransform } from '@angular/core';
import { TrainingItemActions } from 'src/app/views/training/past-trainings/training-item/training-item.component';

@Pipe({
    name: 'actionToIcon'
})

export class ActionToIconPipe implements PipeTransform {

    private readonly actionToIcon: {[key: string]: string} = {
        'delete': 'delete',
        'more': 'more_vert'
    };

    transform(action: TrainingItemActions): string {
        return this.actionToIcon[action] as string;
    }

}
