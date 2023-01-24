/* tslint:disable */
/* eslint-disable */
export interface SignupRequestDto {

  /**
   * Password entered by user during registration
   */
  confirmPassword: string;

  /**
   * Email entered by user during registration
   */
  email: string;

  /**
   * User's current language code preference
   */
  languageCode: 'hr' | 'en';

  /**
   * Password entered by user during registration
   */
  password: string;

  /**
   * User's current weight unit preference
   */
  weightUnit: 'lbs' | 'kg';
}
