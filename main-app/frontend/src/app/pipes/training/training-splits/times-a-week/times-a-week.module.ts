import { NgModule } from '@angular/core';
import { TimesAWeekPipe } from './times-a-week.pipe';

@NgModule({
    declarations: [TimesAWeekPipe],
    exports: [TimesAWeekPipe],
})
export class TimesAWeekModule {}
