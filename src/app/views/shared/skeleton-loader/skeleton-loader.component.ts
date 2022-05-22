import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'bl-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoaderComponent {

    @Input()
    width: number;

    @Input()
    height: number;

    @Input()
    borderRadius: number;
}
