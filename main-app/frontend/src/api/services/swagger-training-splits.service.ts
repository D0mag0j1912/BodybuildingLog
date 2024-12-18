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

import { StreamModelDto } from '../models/stream-model-dto';
import { TrainingSplitDto } from '../models/training-split-dto';

@Injectable({
  providedIn: 'root',
})
export class SwaggerTrainingSplitsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation trainingSplitsControllerGetTrainingSplits
   */
  static readonly TrainingSplitsControllerGetTrainingSplitsPath = '/api/training/training-splits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trainingSplitsControllerGetTrainingSplits()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerGetTrainingSplits$Response(params?: {

    /**
     * search value
     */
    contains?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.TrainingSplitsControllerGetTrainingSplitsPath, 'get');
    if (params) {
      rb.query('contains', params.contains, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StreamModelDto & {
        'IsLoading'?: boolean;
        'IsError'?: boolean;
        'Value'?: Array<TrainingSplitDto>;
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `trainingSplitsControllerGetTrainingSplits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerGetTrainingSplits(params?: {

    /**
     * search value
     */
    contains?: string;
    context?: HttpContext
  }
): Observable<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
}> {

    return this.trainingSplitsControllerGetTrainingSplits$Response(params).pipe(
      map((r: StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
}>) => r.body as StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
})
    );
  }

  /**
   * Path part for operation trainingSplitsControllerCreateTrainingSplit
   */
  static readonly TrainingSplitsControllerCreateTrainingSplitPath = '/api/training/training-splits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trainingSplitsControllerCreateTrainingSplit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trainingSplitsControllerCreateTrainingSplit$Response(params: {
    context?: HttpContext
    body: TrainingSplitDto
  }
): Observable<StrictHttpResponse<TrainingSplitDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.TrainingSplitsControllerCreateTrainingSplitPath, 'post');
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
        return r as StrictHttpResponse<TrainingSplitDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `trainingSplitsControllerCreateTrainingSplit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trainingSplitsControllerCreateTrainingSplit(params: {
    context?: HttpContext
    body: TrainingSplitDto
  }
): Observable<TrainingSplitDto> {

    return this.trainingSplitsControllerCreateTrainingSplit$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingSplitDto>) => r.body as TrainingSplitDto)
    );
  }

  /**
   * Path part for operation trainingSplitsControllerGetTrainingSplit
   */
  static readonly TrainingSplitsControllerGetTrainingSplitPath = '/api/training/training-splits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trainingSplitsControllerGetTrainingSplit()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerGetTrainingSplit$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TrainingSplitDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.TrainingSplitsControllerGetTrainingSplitPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TrainingSplitDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `trainingSplitsControllerGetTrainingSplit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerGetTrainingSplit(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TrainingSplitDto> {

    return this.trainingSplitsControllerGetTrainingSplit$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingSplitDto>) => r.body as TrainingSplitDto)
    );
  }

  /**
   * Path part for operation trainingSplitsControllerUpdateTrainingSplit
   */
  static readonly TrainingSplitsControllerUpdateTrainingSplitPath = '/api/training/training-splits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trainingSplitsControllerUpdateTrainingSplit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trainingSplitsControllerUpdateTrainingSplit$Response(params: {
    id: string;
    context?: HttpContext
    body: TrainingSplitDto
  }
): Observable<StrictHttpResponse<TrainingSplitDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.TrainingSplitsControllerUpdateTrainingSplitPath, 'put');
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
        return r as StrictHttpResponse<TrainingSplitDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `trainingSplitsControllerUpdateTrainingSplit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trainingSplitsControllerUpdateTrainingSplit(params: {
    id: string;
    context?: HttpContext
    body: TrainingSplitDto
  }
): Observable<TrainingSplitDto> {

    return this.trainingSplitsControllerUpdateTrainingSplit$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingSplitDto>) => r.body as TrainingSplitDto)
    );
  }

  /**
   * Path part for operation trainingSplitsControllerDeleteTrainingSplit
   */
  static readonly TrainingSplitsControllerDeleteTrainingSplitPath = '/api/training/training-splits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trainingSplitsControllerDeleteTrainingSplit()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerDeleteTrainingSplit$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.TrainingSplitsControllerDeleteTrainingSplitPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `trainingSplitsControllerDeleteTrainingSplit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trainingSplitsControllerDeleteTrainingSplit(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.trainingSplitsControllerDeleteTrainingSplit$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
