import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './views/auth/auth.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrainingModule } from './views/training/training.module';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { init } from '@sentry/angular';
import { SentryService } from './services/errors/sentry.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavigationModule } from './views/navigation/navigation.module';

init({
    dsn: 'https://b4903b17554c4e40bbada176e50e4719@o997027.ingest.sentry.io/5955490'
});

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
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
        TrainingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    }, {
        provide: ErrorHandler,
        useClass: SentryService
    },
    HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
