import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '../auth/auth.module';
import { PreferencesComponent } from './preferences/preferences.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const COMPONENTS = [SideNavComponent, PreferencesComponent];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, RouterModule, IonicModule];

const IMPORTS = [AuthModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS],
    exports: [...COMPONENTS],
})
export class NavigationModule {}
