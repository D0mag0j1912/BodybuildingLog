/* tslint:disable */
/* eslint-disable */
export interface PreferencesDto {
  '_id'?: string;

  /**
   * User's current language code preference
   */
  languageCode: string;

  /**
   * User's current set duration unit preference
   */
  setDurationUnit?: string;

  /**
   * User's current past trainings period preference
   */
  showByPeriod?: string;

  /**
   * Id of authenticated user
   */
  userId?: string;

  /**
   * User's current weight unit preference
   */
  weightUnit: string;
}
