/* tslint:disable */
/* eslint-disable */
export interface NewTrainingPreferencesDto {

  /**
   * User's current set duration unit preference
   */
  setDurationUnit?: 'seconds' | 'minutes';

  /**
   * User's current weight unit preference
   */
  weightUnit: 'lbs' | 'kg';
}
