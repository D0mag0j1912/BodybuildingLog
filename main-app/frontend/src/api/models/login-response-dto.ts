/* tslint:disable */
/* eslint-disable */
export interface LoginResponseDto {

  /**
   * Integer indicating token expiration
   */
  ExpiresIn?: number;

  /**
   * Message returned by server upon successful authentication
   */
  Message: string;

  /**
   * Boolean indicating whether authentication was successful
   */
  Success: boolean;

  /**
   * Token returned upon successful login
   */
  Token?: string;

  /**
   * Unique _id indicating authentication call
   */
  '_id'?: string;
}
