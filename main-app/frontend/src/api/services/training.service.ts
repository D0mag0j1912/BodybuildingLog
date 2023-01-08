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

import { ExerciseDto } from '../models/exercise-dto';
import { StreamModelDto } from '../models/stream-model-dto';

@Injectable({
  providedIn: 'root',
})
export class TrainingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getExercisesControllerGetExercises
   */
  static readonly GetExercisesControllerGetExercisesPath = '/training/get-exercises';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExercisesControllerGetExercises()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExercisesControllerGetExercises$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<ExerciseDto>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.GetExercisesControllerGetExercisesPath, 'get');
    if (params) {
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
        'Value'?: Array<ExerciseDto>;
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getExercisesControllerGetExercises$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExercisesControllerGetExercises(params?: {
    context?: HttpContext
  }
): Observable<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<ExerciseDto>;
}> {

    return this.getExercisesControllerGetExercises$Response(params).pipe(
      map((r: StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<ExerciseDto>;
}>) => r.body as StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<ExerciseDto>;
})
    );
  }

}
