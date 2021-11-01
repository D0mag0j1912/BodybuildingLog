import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
})
export class TrainingItemActionsComponent {

    @Input()
    iconName: string = '';
}
