/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { SwaggerAuthenticationService } from './services/swagger-authentication.service';
import { SwaggerPreferencesService } from './services/swagger-preferences.service';
import { SwaggerNewTrainingService } from './services/swagger-new-training.service';
import { SwaggerPastTrainingsService } from './services/swagger-past-trainings.service';
import { SwaggerTrainingService } from './services/swagger-training.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SwaggerAuthenticationService,
    SwaggerPreferencesService,
    SwaggerNewTrainingService,
    SwaggerPastTrainingsService,
    SwaggerTrainingService,
    ApiConfiguration
  ],
})
export class SwaggerApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<SwaggerApiModule> {
    return {
      ngModule: SwaggerApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: SwaggerApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('SwaggerApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
