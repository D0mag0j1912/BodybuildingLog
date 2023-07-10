import { NgModule } from '@angular/core';
import { NumberTranslatePipe } from './number-translate.pipe';

@NgModule({
    declarations: [NumberTranslatePipe],
    exports: [NumberTranslatePipe],
})
export class NumberTranslateModule {}
