import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from '../views/navigation/header/header.component';
import { SideNavComponent } from '../views/navigation/side-nav/side-nav.component';
import { AuthModule } from './auth/auth.module';

const COMPONENTS = [
    HeaderComponent,
    SideNavComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    IonicModule,
];

const IMPORTS = [AuthModule];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...IMPORTS,
    ],
    exports: [ ...COMPONENTS ],
})
export class NavigationModule {}
