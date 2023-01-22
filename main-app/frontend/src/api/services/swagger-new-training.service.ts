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
import { NewTrainingDto } from '../models/new-training-dto';

@Injectable({
  providedIn: 'root',
})
export class SwaggerNewTrainingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation newTrainingControllerAddTraining
   */
  static readonly NewTrainingControllerAddTrainingPath = '/api/training/new-training';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newTrainingControllerAddTraining()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTrainingControllerAddTraining$Response(params: {
    context?: HttpContext
    body: NewTrainingDto
  }
): Observable<StrictHttpResponse<GeneralResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerNewTrainingService.NewTrainingControllerAddTrainingPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `newTrainingControllerAddTraining$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTrainingControllerAddTraining(params: {
    context?: HttpContext
    body: NewTrainingDto
  }
): Observable<GeneralResponseDto> {

    return this.newTrainingControllerAddTraining$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralResponseDto>) => r.body as GeneralResponseDto)
    );
  }

  /**
   * Path part for operation newTrainingControllerUpdateTraining
   */
  static readonly NewTrainingControllerUpdateTrainingPath = '/api/training/new-training/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newTrainingControllerUpdateTraining()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTrainingControllerUpdateTraining$Response(params: {
    id: string;
    context?: HttpContext
    body: NewTrainingDto
  }
): Observable<StrictHttpResponse<GeneralResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerNewTrainingService.NewTrainingControllerUpdateTrainingPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `newTrainingControllerUpdateTraining$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newTrainingControllerUpdateTraining(params: {
    id: string;
    context?: HttpContext
    body: NewTrainingDto
  }
): Observable<GeneralResponseDto> {

    return this.newTrainingControllerUpdateTraining$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralResponseDto>) => r.body as GeneralResponseDto)
    );
  }

}
