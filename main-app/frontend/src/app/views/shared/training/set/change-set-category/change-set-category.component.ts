import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'bl-change-set-category',
    templateUrl: './change-set-category.component.html',
    styleUrls: ['./change-set-category.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeSetCategoryComponent {}
