/* tslint:disable */
/* eslint-disable */
import { PreferencesDto } from './preferences-dto';
export interface UpdatePreferencesDto {

  /**
   * Type of the preference that changed
   */
  preferenceChanged: 'language' | 'showByPeriod' | 'weightUnit' | 'setDurationUnit' | 'trainingSplit';

  /**
   * Preferences data
   */
  preferences: PreferencesDto;
}
