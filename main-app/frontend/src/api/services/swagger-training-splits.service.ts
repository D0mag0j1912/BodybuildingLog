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
   * Path part for operation getTrainingSplitsControllerGetTrainingSplits
   */
  static readonly GetTrainingSplitsControllerGetTrainingSplitsPath = '/api/training/training-splits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrainingSplitsControllerGetTrainingSplits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainingSplitsControllerGetTrainingSplits$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerTrainingSplitsService.GetTrainingSplitsControllerGetTrainingSplitsPath, 'get');
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
        'Value'?: Array<TrainingSplitDto>;
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTrainingSplitsControllerGetTrainingSplits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainingSplitsControllerGetTrainingSplits(params?: {
    context?: HttpContext
  }
): Observable<StreamModelDto & {
'IsLoading'?: boolean;
'IsError'?: boolean;
'Value'?: Array<TrainingSplitDto>;
}> {

    return this.getTrainingSplitsControllerGetTrainingSplits$Response(params).pipe(
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

}
