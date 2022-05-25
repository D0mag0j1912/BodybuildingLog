import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from '../../services/api/auth/login.service';
import { SignupService } from '../../services/api/auth/signup.service';
import { LoginComponent } from '../../views/auth/login/login.component';
import { SignupComponent } from '../../views/auth/signup/signup.component';
import { SharedModule } from '../shared.module';
import { AutofocusModule } from '../../directives/autofocus/autofocus.module';
import { AuthRoutingModule } from './auth-routing.module';

const COMPONENTS = [
    SignupComponent,
    LoginComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
];

const MY_IMPORTS = [
    SharedModule,
    AuthRoutingModule,
    AutofocusModule,
];

const SERVICES = [
    SignupService,
    LoginService,
];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...MY_IMPORTS,
    ],
    exports: [ ...COMPONENTS ],
    providers: [ ...SERVICES ],
})
export class AuthModule {}
