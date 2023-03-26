import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'bl-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
    @Input()
    imagePath: string;

    @Input()
    title: string;

    @Input()
    description: string;
}
