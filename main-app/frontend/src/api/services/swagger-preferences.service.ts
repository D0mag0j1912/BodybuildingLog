/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GeneralResponseDto } from '../models/general-response-dto';
import { PreferencesDto } from '../models/preferences-dto';
import { UpdatePreferencesDto } from '../models/update-preferences-dto';

@Injectable({
  providedIn: 'root',
})
export class SwaggerPreferencesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation preferencesControllerGetPreferences
   */
  static readonly PreferencesControllerGetPreferencesPath = '/api/preferences/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `preferencesControllerGetPreferences()` instead.
   *
   * This method doesn't expect any request body.
   */
  preferencesControllerGetPreferences$Response(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PreferencesDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerPreferencesService.PreferencesControllerGetPreferencesPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PreferencesDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `preferencesControllerGetPreferences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  preferencesControllerGetPreferences(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<PreferencesDto> {

    return this.preferencesControllerGetPreferences$Response(params).pipe(
      map((r: StrictHttpResponse<PreferencesDto>) => r.body as PreferencesDto)
    );
  }

  /**
   * Path part for operation preferencesControllerSetPreferences
   */
  static readonly PreferencesControllerSetPreferencesPath = '/api/preferences/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `preferencesControllerSetPreferences()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  preferencesControllerSetPreferences$Response(params: {
    userId: string;
    context?: HttpContext
    body: UpdatePreferencesDto
  }
): Observable<StrictHttpResponse<GeneralResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerPreferencesService.PreferencesControllerSetPreferencesPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `preferencesControllerSetPreferences$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  preferencesControllerSetPreferences(params: {
    userId: string;
    context?: HttpContext
    body: UpdatePreferencesDto
  }
): Observable<GeneralResponseDto> {

    return this.preferencesControllerSetPreferences$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralResponseDto>) => r.body as GeneralResponseDto)
    );
  }

}
