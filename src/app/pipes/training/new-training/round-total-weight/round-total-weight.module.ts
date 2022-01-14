import { NgModule } from '@angular/core';
import { RoundTotalWeightPipe } from './round-total-weight.pipe';

@NgModule({
    declarations: [RoundTotalWeightPipe],
    exports: [RoundTotalWeightPipe],
    providers: [RoundTotalWeightPipe],
})
export class RoundTotalWeightModule {}
