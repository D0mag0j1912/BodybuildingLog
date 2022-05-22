import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bl-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoaderComponent implements OnInit {

    width: string;
    height: string;
    className: string;

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
    ) { }

    ngOnInit(): void {
        const host = this.elementRef.nativeElement;
        if (this.className) {
            host.classList.add(this.className);
        }

        host.style.setProperty('width', this.width ?? '');
        host.style.setProperty('height', this.height ?? '');
    }
}
