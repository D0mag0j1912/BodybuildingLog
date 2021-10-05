import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../material.module";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports: [
        SignupComponent,
        LoginComponent,
        AuthRoutingModule
    ]
})
export class AuthModule{}
