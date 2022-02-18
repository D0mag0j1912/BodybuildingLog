import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { init } from '@sentry/angular';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { MaterialModule } from './material.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation.module';
import { SentryService } from './services/errors/sentry.service';

init({
    dsn: 'https://b4903b17554c4e40bbada176e50e4719@o997027.ingest.sentry.io/5955490',
});

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        NavigationModule,
        AuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        IonicModule.forRoot(),
    ],
    providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        }, {
            provide: ErrorHandler,
            useClass: SentryService,
        },
        HttpClient,
        AuthGuard,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
