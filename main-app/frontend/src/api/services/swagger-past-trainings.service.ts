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

import { NewTrainingDto } from '../models/new-training-dto';
import { PaginatorDto } from '../models/paginator-dto';
import { PaginatorParamsDto } from '../models/paginator-params-dto';
import { PastTrainingsDto } from '../models/past-trainings-dto';
import { StreamModelDto } from '../models/stream-model-dto';

@Injectable({
  providedIn: 'root',
})
export class SwaggerPastTrainingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation pastTrainingsControllerGetPastTrainings
   */
  static readonly PastTrainingsControllerGetPastTrainingsPath = '/api/training/past-trainings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pastTrainingsControllerGetPastTrainings()` instead.
   *
   * This method doesn't expect any request body.
   */
  pastTrainingsControllerGetPastTrainings$Response(params?: {
    currentDate?: string;
    periodFilterType?: string;
    searchData?: any;
    muscleGroups?: Array<'Legs' | 'Core' | 'Back' | 'Chest' | 'Biceps' | 'Triceps' | 'Neck' | 'Forearm' | 'Glutes' | 'Shoulders' | ''>;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatorDto & {
'Next'?: PaginatorParamsDto;
'Previous'?: PaginatorParamsDto;
'CurrentPage'?: number;
'PerPage'?: number;
'TotalCount'?: number;
'TotalPages'?: number;
'Results'?: PastTrainingsDto;
}>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerPastTrainingsService.PastTrainingsControllerGetPastTrainingsPath, 'get');
    if (params) {
      rb.query('currentDate', params.currentDate, {});
      rb.query('periodFilterType', params.periodFilterType, {});
      rb.query('searchData', params.searchData, {});
      rb.query('muscleGroups', params.muscleGroups, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatorDto & {
        'Next'?: PaginatorParamsDto;
        'Previous'?: PaginatorParamsDto;
        'CurrentPage'?: number;
        'PerPage'?: number;
        'TotalCount'?: number;
        'TotalPages'?: number;
        'Results'?: PastTrainingsDto;
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pastTrainingsControllerGetPastTrainings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pastTrainingsControllerGetPastTrainings(params?: {
    currentDate?: string;
    periodFilterType?: string;
    searchData?: any;
    muscleGroups?: Array<'Legs' | 'Core' | 'Back' | 'Chest' | 'Biceps' | 'Triceps' | 'Neck' | 'Forearm' | 'Glutes' | 'Shoulders' | ''>;
    context?: HttpContext
  }
): Observable<PaginatorDto & {
'Next'?: PaginatorParamsDto;
'Previous'?: PaginatorParamsDto;
'CurrentPage'?: number;
'PerPage'?: number;
'TotalCount'?: number;
'TotalPages'?: number;
'Results'?: PastTrainingsDto;
}> {

    return this.pastTrainingsControllerGetPastTrainings$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatorDto & {
'Next'?: PaginatorParamsDto;
'Previous'?: PaginatorParamsDto;
'CurrentPage'?: number;
'PerPage'?: number;
'TotalCount'?: number;
'TotalPages'?: number;
'Results'?: PastTrainingsDto;
}>) => r.body as PaginatorDto & {
'Next'?: PaginatorParamsDto;
'Previous'?: PaginatorParamsDto;
'CurrentPage'?: number;
'PerPage'?: number;
'TotalCount'?: number;
'TotalPages'?: number;
'Results'?: PastTrainingsDto;
})
    );
  }

  /**
   * Path part for operation pastTrainingsControllerGetPastTraining
   */
  static readonly PastTrainingsControllerGetPastTrainingPath = '/api/training/past-trainings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pastTrainingsControllerGetPastTraining()` instead.
   *
   * This method doesn't expect any request body.
   */
  pastTrainingsControllerGetPastTraining$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: NewTrainingDto;
}>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerPastTrainingsService.PastTrainingsControllerGetPastTrainingPath, 'get');
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
        return r as StrictHttpResponse<StreamModelDto & {
        'IsLoading'?: boolean;
        'IsError'?: boolean;
        'Value'?: NewTrainingDto;
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pastTrainingsControllerGetPastTraining$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pastTrainingsControllerGetPastTraining(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: NewTrainingDto;
}> {

    return this.pastTrainingsControllerGetPastTraining$Response(params).pipe(
      map((r: StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: NewTrainingDto;
}>) => r.body as StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: NewTrainingDto;
})
    );
  }

  /**
   * Path part for operation deleteTrainingActionControllerDeleteTraining
   */
  static readonly DeleteTrainingActionControllerDeleteTrainingPath = '/api/training/delete-training/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTrainingActionControllerDeleteTraining()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrainingActionControllerDeleteTraining$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerPastTrainingsService.DeleteTrainingActionControllerDeleteTrainingPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteTrainingActionControllerDeleteTraining$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrainingActionControllerDeleteTraining(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteTrainingActionControllerDeleteTraining$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
