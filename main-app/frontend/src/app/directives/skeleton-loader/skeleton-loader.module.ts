import { NgModule } from '@angular/core';
import { SkeletonLoaderDirective } from './skeleton-loader.directive';

@NgModule({
    declarations: [SkeletonLoaderDirective],
    exports: [SkeletonLoaderDirective],
})
export class SkeletonLoaderModule { }
