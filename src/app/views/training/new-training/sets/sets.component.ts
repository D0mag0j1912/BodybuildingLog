import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetsComponent {}
