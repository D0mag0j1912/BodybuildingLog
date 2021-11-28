import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { AuthService } from '../../services/auth/auth.service';
import { LoginService } from '../../services/auth/login.service';
import { SignupService } from '../../services/auth/signup.service';
import { LoginComponent } from '../../views/auth/login/login.component';
import { SignupComponent } from '../../views/auth/signup/signup.component';
import { SharedModule } from '../shared.module';
import { AuthRoutingModule } from './auth-routing.module';

const COMPONENTS = [
    SignupComponent,
    LoginComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
];

const MY_IMPORTS = [
    MaterialModule,
    AuthRoutingModule,
    SharedModule,
];

const SERVICES = [
    SignupService,
    LoginService,
    AuthService,
];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...MY_IMPORTS,
    ],
    exports: [
        SignupComponent,
        LoginComponent,
        AuthRoutingModule,
    ],
    providers: [ ...SERVICES ],
})
export class AuthModule {}
