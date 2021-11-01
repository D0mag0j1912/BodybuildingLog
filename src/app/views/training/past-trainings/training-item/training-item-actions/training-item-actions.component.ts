import { Component, Input } from '@angular/core';
import { TrainingItemActions } from '../training-item.component';

@Component({
    selector: 'app-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
})
export class TrainingItemActionsComponent {

    @Input()
    action: TrainingItemActions = 'more';
}
