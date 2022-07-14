import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PreferencesComponent } from '../views/navigation/preferences/preferences.component';
import { SideNavComponent } from '../views/navigation/side-nav/side-nav.component';
import { AuthModule } from './auth/auth.module';

const COMPONENTS = [
    SideNavComponent,
    PreferencesComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    TranslateModule,
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
