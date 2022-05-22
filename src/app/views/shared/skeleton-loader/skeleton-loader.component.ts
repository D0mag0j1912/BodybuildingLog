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

    styleSkeletonLoader(): { [key: string]: string } {
        return {
            'width.px': `${this.width ? this.width : ''}`,
            'height.px': `${this.height ? this.height : ''}`,
            'border-radius.px': `${this.borderRadius ? this.borderRadius : ''}`,
        };
    }
}
