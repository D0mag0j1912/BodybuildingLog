import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagesComponent } from '../views/navigation/side-nav/languages/languages.component';
import { SideNavComponent } from '../views/navigation/side-nav/side-nav.component';
import { AuthModule } from './auth/auth.module';

const COMPONENTS = [
    SideNavComponent,
    LanguagesComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    TranslateModule,
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
export class NavigationModule { }
