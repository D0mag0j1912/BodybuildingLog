import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { AuthModule } from '../auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MaterialModule,
        FlexLayoutModule,
        AuthModule,
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
    ],
})
export class NavigationModule {}
