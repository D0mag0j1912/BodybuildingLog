import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [DialogComponent],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule
    ],
    entryComponents: [DialogComponent]
})
export class SharedModule {}
