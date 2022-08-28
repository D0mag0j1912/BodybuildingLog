import { NgModule } from '@angular/core';
import { SanitizePipe } from './sanitize-html.pipe';

@NgModule({
    declarations: [SanitizePipe],
    exports: [SanitizePipe],
})
export class SanitizeHtmlModule {}
