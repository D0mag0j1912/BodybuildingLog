import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'bl-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {}
