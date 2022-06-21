import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'bl-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoaderComponent implements OnInit {

    width: string;
    height: string;
    borderRadius: string;
    margin: string;
    className: string;

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
    ) { }

    ngOnInit(): void {
        const host = this.elementRef.nativeElement;
        if (this.className) {
            host.classList.add(this.className);
        }
    }

    styleSkeleton(): { [key: string]: string } {
        return {
            'width': this.width ?? '',
            'height': this.height ?? '',
            'border-radius': this.borderRadius ?? '',
            'margin': this.margin ?? '',
        };
    }
}
