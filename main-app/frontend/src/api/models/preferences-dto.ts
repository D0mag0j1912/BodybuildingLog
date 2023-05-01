/* tslint:disable */
/* eslint-disable */
export interface PreferencesDto {
  '_id'?: string;

  /**
   * User's current language code preference
   */
  languageCode: 'hr' | 'en';

  /**
   * User's current set duration unit preference
   */
  setDurationUnit?: 'seconds' | 'minutes';

  /**
   * User's current past trainings period preference
   */
  showByPeriod?: 'week' | 'day';

  /**
   * Training split ID
   */
  trainingSplitId?: string;

  /**
   * Id of authenticated user
   */
  userId?: string;

  /**
   * User's current weight unit preference
   */
  weightUnit: 'lbs' | 'kg';
}
