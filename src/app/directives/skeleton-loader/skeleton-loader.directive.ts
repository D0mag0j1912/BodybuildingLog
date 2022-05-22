import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { SkeletonLoaderComponent } from '../../views/shared/skeleton-loader/skeleton-loader.component';

@Directive({ selector: '[skeleton]' })
export class SkeletonLoaderDirective implements OnChanges {

    @Input('skeleton')
    isLoading = false;

    @Input('skeletonRepeat')
    size = 1;

    @Input('skeletonWidth')
    width: string;

    @Input('skeletonHeight')
    height: string;

    @Input('skeletonBorderRadius')
    borderRadius: string;

    @Input('skeletonClassName')
    className: string;

    constructor(
        private readonly _template: TemplateRef<unknown>,
        private readonly _viewContainerRef: ViewContainerRef,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes?.isLoading) {
            this._viewContainerRef.clear();

            if (changes?.isLoading?.currentValue) {
                Array.from({ length: this.size }).forEach(_ => {
                    const ref = this._viewContainerRef.createComponent(SkeletonLoaderComponent);

                    Object.assign(ref.instance, {
                        width: this.width,
                        height: this.height,
                        borderRadius: this.borderRadius,
                        className: this.className,
                    });
                });
            }
            else {
                this._viewContainerRef.createEmbeddedView(this._template);
            }
        }
    }
}
