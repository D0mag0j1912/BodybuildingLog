import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'bl-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitsComponent {}
