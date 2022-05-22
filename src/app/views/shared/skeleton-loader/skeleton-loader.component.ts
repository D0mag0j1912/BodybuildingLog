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

    @Input()
    pixels = true;

    styleSkeletonLoader(): { [key: string]: string } {
        return {
            'width': this.adjustUnit(this.width),
            'height': this.adjustUnit(this.height),
            'border-radius': this.adjustUnit(this.borderRadius),
        };
    }

    private adjustUnit(property: number): string {
        if (property) {
            if (this.pixels) {
                return `${property}px`;
            }
            else {
                return `${property}%`;
            }
        }
        else {
            return '';
        }
    }
}
