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

import { LoginRequestDto } from '../models/login-request-dto';
import { LoginResponseDto } from '../models/login-response-dto';
import { SignupRequestDto } from '../models/signup-request-dto';
import { SignupResponseDto } from '../models/signup-response-dto';

@Injectable({
  providedIn: 'root',
})
export class SwaggerAuthenticationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEmailsControllerGetEmails
   */
  static readonly GetEmailsControllerGetEmailsPath = '/auth/get-all-emails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmailsControllerGetEmails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmailsControllerGetEmails$Response(params: {

    /**
     * Email
     */
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerAuthenticationService.GetEmailsControllerGetEmailsPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
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
   * To access the full response (for headers, for example), `getEmailsControllerGetEmails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmailsControllerGetEmails(params: {

    /**
     * Email
     */
    email: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.getEmailsControllerGetEmails$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation signupControllerSignup
   */
  static readonly SignupControllerSignupPath = '/auth/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupControllerSignup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupControllerSignup$Response(params: {
    context?: HttpContext
    body: SignupRequestDto
  }
): Observable<StrictHttpResponse<SignupResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerAuthenticationService.SignupControllerSignupPath, 'post');
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
        return r as StrictHttpResponse<SignupResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupControllerSignup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupControllerSignup(params: {
    context?: HttpContext
    body: SignupRequestDto
  }
): Observable<SignupResponseDto> {

    return this.signupControllerSignup$Response(params).pipe(
      map((r: StrictHttpResponse<SignupResponseDto>) => r.body as SignupResponseDto)
    );
  }

  /**
   * Path part for operation loginControllerLogin
   */
  static readonly LoginControllerLoginPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginControllerLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginControllerLogin$Response(params: {
    context?: HttpContext
    body: LoginRequestDto
  }
): Observable<StrictHttpResponse<LoginResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerAuthenticationService.LoginControllerLoginPath, 'post');
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
        return r as StrictHttpResponse<LoginResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginControllerLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginControllerLogin(params: {
    context?: HttpContext
    body: LoginRequestDto
  }
): Observable<LoginResponseDto> {

    return this.loginControllerLogin$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponseDto>) => r.body as LoginResponseDto)
    );
  }

  /**
   * Path part for operation checkPassControllerPasswordFitsEmail
   */
  static readonly CheckPassControllerPasswordFitsEmailPath = '/auth/check-pass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkPassControllerPasswordFitsEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPassControllerPasswordFitsEmail$Response(params: {

    /**
     * The email address of the user
     */
    email: string;

    /**
     * The password of the user
     */
    password: string;
    '_id'?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SwaggerAuthenticationService.CheckPassControllerPasswordFitsEmailPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
      rb.query('password', params.password, {});
      rb.query('_id', params['_id'], {});
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
   * To access the full response (for headers, for example), `checkPassControllerPasswordFitsEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPassControllerPasswordFitsEmail(params: {

    /**
     * The email address of the user
     */
    email: string;

    /**
     * The password of the user
     */
    password: string;
    '_id'?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.checkPassControllerPasswordFitsEmail$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
